# taxi-mate

### サイトの構造
1. 以前まで利用していたLP
2. エスエムエス型に最適化されたステップフォームLP

### サーバー構造
・PHPを利用しているが、管理コストを下げるという観点から「App Engine」を利用
・App Engineでは「app.yaml」の設定ファイルを書くだけでアプリケーションを利用できる構造になっている

### デプロイ関連について
・Cloud Buildというものを使っており、githubのリモートリポジトリにPUSHされると自動でデプロイするようにしている
・ビルドリージョンは「us-central-1」を利用。ホスティングサーバーはApp Engineが自動的にホスティングするとのこと。
・また、最新のバージョンにトラフィックを割り当てるようにしている（yamlの中に「--promote」を入れている）
※ しかしこの設定が何なのかは理解していないので注意