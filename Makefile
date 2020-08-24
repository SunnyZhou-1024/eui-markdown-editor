publish_github_pages:
	rm -rf ./build
	rm -rf ./gh-pages
	npm run build
	git clone --depth=1 https://github.com/SunnyZhou-1024/eui-markdown-editor.git --branch gh-pages ./gh-pages 2>&1 > /dev/null
	rm -rf ./gh-pages/*
	cp -R ./build/* ./gh-pages/
	sed -i -e "s/\/static/.\/static/g" ./gh-pages/index.html
	sed -i -e "s/\/favi/.\/favi/g" ./gh-pages/index.html
	sed -i -e "s/\/logo/.\/logo/g" ./gh-pages/index.html
	sed -i -e "s/\/mani/.\/mani/g" ./gh-pages/index.html
	git -C ./gh-pages add --all
	git -C ./gh-pages commit --amend --no-edit
	git -C ./gh-pages push --force origin gh-pages
