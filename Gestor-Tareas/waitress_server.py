from waitress import serve
from main import app

if __name__ == "__main__":
    print("Iniciando servidor Waitress en http://localhost:8000")
    print("Presiona Ctrl+C para detener el servidor")
    serve(app, host="0.0.0.0", port=8000, threads=4) 