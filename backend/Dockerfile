FROM python:3.6
EXPOSE 5000

# add code to container
ADD . /backend
WORKDIR /backend

# install python dependencies
RUN pip install -r requirements.txt

# allow option to wait for mysql server
# necessary for docker-compose
RUN apt-get update && apt-get install -y mysql-client
RUN chmod +x scripts/wait-for-mysql.sh

# start sever on entry
CMD ["python", "src/run.py"]
