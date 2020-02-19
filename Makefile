.PHONY: all

VERSION = 100

build:
	npm run build

deploy-prod: build
	gcloud app deploy --project instrodux --version ${VERSION}
