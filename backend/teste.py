from sqlalchemy import create_engine

# Configuração do banco de dados MySQL
DATABASE_URL = "mysql+pymysql://root:1234@localhost/pkm_cards"

# Criando o engine
engine = create_engine(DATABASE_URL)

# Testando conexão
try:
    with engine.connect() as connection:
        print("✅ Conectado ao banco de dados com sucesso!")
except Exception as e:
    print(f"❌ Erro ao conectar ao banco: {e}")
