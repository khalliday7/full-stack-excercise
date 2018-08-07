#!/bin/bash
# wait-for-mysql.sh

set -e

host="$1"
shift
cmd="$@"

echo "trying to connect to mysql at host = $host"

while ! mysqladmin ping -h"$host" --silent; do
  echo "mysql is unavailable - sleeping"
  sleep 1
done

echo "mysql is up - running command"
exec $cmd

