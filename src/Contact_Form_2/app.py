
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:lobhik@localhost:3306/user'
app.config['CORS_HEADERS'] = 'Content-Type'
# remaining headers

# 
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
db = SQLAlchemy(app)


# Model

# Model
class User(db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(35))
    Email = db.Column(db.String(60))
    Phone = db.Column(db.Integer)
    Company = db.Column(db.String(70))
    No_of_Employees = db.Column(db.String(25))
    Job_Level = db.Column(db.String(25))
    Message = db.Column(db.String(400))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __init__(self, Name, Email, Phone, Company, No_of_Employees, Job_Level, Message ):
        self.Name = Name
        self.Email = Email
        self.Phone = Phone
        self.Company = Company
        self.No_of_Employees = No_of_Employees
        self.Job_Level = Job_Level
        self.Message = Message

    def __repr__(self):
        return f"{self.id}"


db.create_all()


class UserSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = User
        sqla_session = db.session

    id = fields.Number(dump_only=True)
    Name = fields.String(required=True)
    Email = fields.String(required=True)
    Phone = fields.String(required=True)
    Company = fields.String(required=True)
    No_of_Employees = fields.String(required=True)
    Job_Level = fields.String(required=True)
    Message = fields.String(required=True)


@app.route('/users', methods=['GET'])
def index():
    get_Users = User.query.all()
    todo_schema = UserSchema(many=True)
    users = todo_schema.dump(get_Users)
    return make_response(jsonify({"users": users}))


@app.route('/api/v1/todo/<id>', methods=['GET'])
def get_todo_by_id(id):
    get_User = User.query.get(id)
    User_schema = UserSchema()
    User = User_schema.dump(get_User)
    return make_response(jsonify({"User": User}))



@app.route('/users', methods=['POST'])
def create_todo():
    data = request.get_json()
    User_schema = UserSchema()
    User = User_schema.load(data)
    result = User_schema.dump(User.create())
    return make_response(jsonify({"user": result}), 200)


if __name__ == "__main__":
    app.run(debug=True)
