import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'

const theme: Theme = {
    ...DefaultTheme,
    enhanceApp({ router }) {
        if (typeof window === 'undefined') return

        const { onBeforeRouteChange } = router
        let resolve: (() => void) | null = null

        // @ts-ignore
        router.onBeforeRouteChange = async (to) => {
            // @ts-ignore
            if (!document.startViewTransition) {
                return onBeforeRouteChange?.(to)
            }

            const promise = new Promise<void>((r) => (resolve = r))

            // @ts-ignore
            const transition = document.startViewTransition(async () => {
                await onBeforeRouteChange?.(to)
                await promise
            })

            transition.finished.then(() => {
                resolve = null
            })

            // Return the transition promise to keep the router hook active? 
            // Actually VitePress router hook expects boolean or void.
            // We can't return the transition promise here directly if types don't match.
        }

        const { onAfterRouteChanged } = router
        // @ts-ignore
        router.onAfterRouteChanged = (to) => {
            onAfterRouteChanged?.(to)
            if (resolve) {
                resolve()
                resolve = null
            }
        }
    }
}

export default theme
