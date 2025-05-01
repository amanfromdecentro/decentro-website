build-qa:
	npm run build

push-qa: build-qa
	aws s3 sync out s3://decentro.tech --exclude ".DS_Store" --delete
