start:
	yarn run install
	yarn run build
	yarn run start


deploy:
	flyctl scale count 1
	flyctl deploy



