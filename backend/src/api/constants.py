''' Define constants for FullStackTutorial backend '''

import os

###############################################################################
# SQLAlchemy Constants
###############################################################################

KEY_SQLALCHEMY_DATABASE_URI = 'SQLALCHEMY_DATABASE_URI'
KEY_SQLALCHEMY_TRACK_MODIFICATIONS = 'SQLALCHEMY_TRACK_MODIFICATIONS'

###############################################################################
# MYSQL Constants
###############################################################################

MYSQL_DATABASE = 'demo_db'
MYSQL_USER = 'demo_user'
MYSQL_PASSWORD = 'demo_pass'
MYSQL_PORT = os.getenv('MYSQL_PORT', '3306')
MYSQL_COMPOSE_HOST = 'db'
LOCALHOST = 'localhost'
IS_COMPOSED = bool(os.environ.get('IS_COMPOSED'))
