.PHONY: all

VERSION = 100

build:
	rm -rf build && npm run build

deploy-prod: build
	gcloud app deploy --project instrodux --version ${VERSION}
