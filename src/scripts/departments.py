import requests
from pymongo import MongoClient

# Conectar con la base de datos local
client = MongoClient('localhost', 27017, username='mongo-user', password='123456')
db = client['points_db']
collection_departments = db['departments'] 
collection_datos = db['cities']  

response_departamentos = requests.get("https://api-colombia.com/api/v1/Department")
data_departamentos = response_departamentos.json()

response_ciudades = requests.get("https://api-colombia.com/api/v1/City")
data_ciudades = response_ciudades.json()

for departamento in data_departamentos:
    collection_departments.insert_one({
        "id": departamento["id"],
        "name": departamento["name"]
    })

for ciudad in data_ciudades:
    collection_datos.insert_one({
        "id": ciudad["id"],
        "name": ciudad["name"],
        "department_id": ciudad["departmentId"]
    })

print("Datos insertados exitosamente en la base de datos.")
