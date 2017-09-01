prepare-host:
	@echo "Since ElasticSearch 5.0 you have to change 'vm.max_map_count' to at least 262144 on the host machine, even when using Docker."
	@echo "In order to do that I'm going to ask you for your sudo password"
	sudo sysctl -w vm.max_map_count=262144
	sudo bash -c 'echo "vm.max_map_count=262144" >> /etc/sysctl.conf'

build-all:
	@make build-flask
	@make build-arangodb
	@make build-nginx
	@make build-elasticsearch
	@make build-swagger
build-flask:
	@docker-compose build sc-flask
build-arangodb:
	@docker-compose build sc-arangodb
build-nginx:
	@docker-compose build sc-nginx
build-elasticsearch:
	@docker-compose build sc-elasticsearch
build-swagger:
	@docker-compose build sc-swagger

rebuild-all: clean-all build-all
rebuild-flask: clean-flask build-flask
rebuild-arangodb: clean-arangodb build-arangodb
rebuild-nginx: clean-nginx build-nginx
rebuild-elasticsearch: clean-elasitcsearch build-elasticsearch
rebuild-swagger: clean-swagger build-swagger

run-dev:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

run-dev-no-logs:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Containers and images ids
CONTS-ARANGO=$(shell docker ps -a -q -f "name=sc-arangodb")
CONTS-FLASK=$(shell docker ps -a -q -f "name=sc-flask")
CONTS-NGINX=$(shell docker ps -a -q -f "name=sc-nginx")
CONTS-ELASTICSEARCH=$(shell docker ps -a -q -f "name=sc-elasticsearch")
CONTS-SWAGGER=$(shell docker ps -a -q -f "name=sc-swagger")

#stop docker containers
stop-arangodb:
	-@docker stop $(CONTS-ARANGO)
stop-flask:
	-@docker stop $(CONTS-FLASK)
stop-nginx:
	-@docker stop $(CONTS-NGINX)
stop-elasticsearch:
	-@docker stop $(CONTS-ELASTICSEARCH)
stop-swagger:
	-@docker stop $(CONTS-SWAGGER)
stop:
	@docker-compose stop

#remove docker containers
rm-arangodb:
	-@docker rm $(CONTS-ARANGO)
rm-flask:
	-@docker rm $(CONTS-FLASK)
rm-nginx:
	-@docker rm $(CONTS-NGINX)
rm-elasticsearch:
	-@docker rm $(CONTS-ELASTICSEARCH)
rm-swagger:
	-@docker rm $(CONTS-SWAGGER)
rm: rm-arangodb rm-flask rm-nginx rm-elasticsearch

# Remove volumes
rm-db-volume:
	-@docker volume rm nextsc_db-data-volume
rm-elasticsearch-volume:
	-@docker volume rm nextsc_elasticsearch-data
rm-nginx-volume:
	-@docker volume rm nextsc_nginx-data-volume
rm-socket-volume:
	-@docker volume rm nextsc_socket-volume
rm-all-volumes: rm-db-volume rm-elasticsearch-volume rm-nginx-volume rm-socket-volume


#clean docker containers
clean-arangodb: stop-arangodb rm-arangodb
clean-flask: stop-flask rm-flask
clean-nginx: stop-nginx rm-nginx
clean-elasticsearch: stop-elasticsearch rm-elasticsearch
clean-all: clean-arangodb clean-flask clean-nginx clean-elasticsearch rm-all-volumes

#Open shell in container
shell-arangodb:
	@docker exec -it sc-arangodb bash
shell-flask:
	@docker exec -it sc-flask bash
shell-nginx:
	@docker exec -it sc-nginx bash
shell-elasticsearch:
	@docker exec -it sc-elasticsearch bash
shell-swagger:
	@docker exec -it sc-swagger

#Logs
logs:
	@docker-compose logs -f
logs-flask:
	@docker logs -f sc-flask
logs-arangodb:
	@docker logs -f sc-arangodb
logs-nginx:
	@docker logs -f sc-nginx
logs-elasticsearch:
	@docker logs -f sc-elasticsearch
logs-swagger:
	@docker logs -f sc-swagger

# reloads
# Only in dev mode local changes will be used after the reload
reload-nginx:
	@docker exec sc-nginx nginx -s reload
reload-uwsgi:
	@docker exec sc-flask uwsgi --reload /tmp/uwsgi.pid

# Tests.
# Starts containers so that we are ready to run tests in them.
prepare-tests:
	-@docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d
	@echo "waiting for all services to fully start"
	@bash wait_for_flask.sh
# Run tests
test:
	@docker exec -t sc-flask pytest server/

load_data:
	@docker exec -t sc-flask bash -c "cd server && python manage.py load_data"

