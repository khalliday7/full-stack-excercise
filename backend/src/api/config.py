''' Define configuration for FullStackTutorial back-end '''

from .constants import (
    KEY_SQLALCHEMY_DATABASE_URI,
    KEY_SQLALCHEMY_TRACK_MODIFICATIONS,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_POST,
    MYSQL_COMPOSE_HOST,
    LOCALHOST,
    IS_COMPOSED
)

def create_sqlalchemy_db_uri(db, user, password, port, host):
    return 'mysql://' + user + ':' + password + '@' \
                        + host + ':' + port + '/' + db

def get_config():
    host = MYSQL_COMPOSE_HOST if IS_COMPOSED else LOCALHOST
    return {
            KEY_SQLALCHEMY_TRACK_MODIFICATIONS: False,
            KEY_SQLALCHEMY_DATABASE_URI:
                create_sqlalchemy_db_uri(
                    MYSQL_DATABASE,
                    MYSQL_USER,
                    MYSQL_PASSWORD,
                    MYSQL_PORT,
                    host
                )
    }
