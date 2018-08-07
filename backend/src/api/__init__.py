''' Define and export create_api function for FullStackTutorial back-end api
'''

from flask import Flask
from .config import get_config
from .dbconn import db
from .routes import add_routes

def create_app():
    ''' Creating FullStackTutorial applciation '''

    app = Flask(__name__)

    # update confi
    config = get_config()
    app.config.update(config)

    # register app with database
    with app.app_context():
        db.init_app(app)
        db.create_all()

    # add routes
    add_routes(app)

    return app
