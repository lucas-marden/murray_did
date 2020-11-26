# -*- coding: utf-8 -*-
"""
Created on Thu Nov 26 14:50:54 2020

@author: liamc
"""
import psycopg2
import time
import datetime
import sys


def main(argv):
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="password",
                                      host="localhost",
                                      port="5432",
                                      database="postgres")
    
        cursor = connection.cursor()
        # Print PostgreSQL Connection properties
        print(connection.get_dsn_parameters(), "\n")
    
        # Print PostgreSQL version
        cursor.execute("SELECT version();")
        record = cursor.fetchone()
        print("You are connected to - ", record, "\n")
        
        def insert_into_table(table_name, entity_name, entity_value):
            #query = " INSERT INTO " + table_name + " VALUES ('2020-11-26 12:23:52', '" + entity_name + "', " + entity_value + "); "
            
            current_unix_time = str(int(time.time()))
            current_date_time = (datetime.datetime.fromtimestamp(int(current_unix_time)).strftime('%Y-%m-%d %H:%M:%S'))
            
            query = " INSERT INTO " + table_name + " VALUES ('" + current_date_time + "', '" + entity_name + "', " + entity_value + "); "
            
            cursor.execute(query)
            connection.commit()
            print("sent command")
        
        table_name = argv[0]
        entity_name = argv[1]
        entity_value = argv[2]
        insert_into_table(table_name, entity_name, entity_value)

    except (Exception, psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL", error)
    finally:
        # closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")

if __name__ == "__main__":
    main(sys.argv[1:])