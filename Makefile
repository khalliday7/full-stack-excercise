.PHONY: stop
stop:
	docker ps -aq | xargs docker stop

.PHONY: clean
clean:
	docker ps -aq | xargs docker stop  && docker ps -aq | xargs docker rm
