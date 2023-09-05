import mysql.connector
import sys
print(sys.executable)

# 測試模組有無導入成功
# try:
#     import mysql.connector
#     print("成功導入")
# except ImportError as e:
#     print("失敗-請下指令pip install mysql-connector-python")

try:
    # 定義連接資訊
    db_config = {
        "host": "127.0.0.1",
        "user": "root",
        "password": "W8i4n1d24~",
        "database": "grandma_sql",
        "port": "3306"

    }

    # 嘗試連接到MySQL資料庫
    conn = mysql.connector.connect(**db_config)
    print(conn)

    if conn.is_connected():
        print("成功連接到MySQL資料庫")
        # 在這裡可以執行一些操作，比如查詢資料或其他操作｀
    else:
        print("連接失敗")

except mysql.connector.Error as err:
    print("連接錯誤：", err)

# finally:
# # 無論成功或失敗，都要關閉資料庫連接
#     if conn.is_connected():
#         conn.close()
#         print("資料庫連接已關閉")
