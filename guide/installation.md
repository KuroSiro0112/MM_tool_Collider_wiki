# インストール

![MM_tool_Collider Icon](./images/MM_tool_Collider.png)

## 動作環境
- **OS**: Windows
- **Maya**: Python 3 が動作するバージョン (Maya 2022以降推奨)

## ダウンロード

最新版は以下からダウンロードしてください。

[MM_tool_Collider をダウンロード (zip)](/MM_tool_Collider.zip)

## 手順

1. `MM_tool_Collider` フォルダ一式を、任意の場所に保存します。
   - 推奨: `C:\Users\<ユーザー名>\Documents\maya\scripts\00_MM\MM_tool_Collider`

2. Mayaを起動します。

3. スクリプトエディタ (Pythonタブ) に以下のコードを入力し、実行します。
   ※ パスは保存した場所に合わせて変更してください。

```python
import sys
import os

# ツールフォルダへのパス
tool_path = r"C:\Users\<ユーザー名>\Documents\maya\scripts\00_MM\MM_tool_Collider（上記ツールを保存した場所）"

if tool_path not in sys.path:
    sys.path.append(tool_path)

import MM_tool_Collider
import importlib
importlib.reload(MM_tool_Collider)
MM_tool_Collider.main()
```

4. 頻繁に使用する場合は、上記のコードをシェルフに登録しておくと便利です。
