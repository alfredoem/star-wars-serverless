install:
	npm install

deploy:
	serverless deploy

destroy:
	serverless remove

test-e2e:
	serverless invoke local -f speciesCreate --path ./test/e2e/data.json
	serverless invoke local -f speciesList
	serverless invoke local -f planetFind --data '{ "pathParameters": {"id":22}}'

test-unit:
	npm test
