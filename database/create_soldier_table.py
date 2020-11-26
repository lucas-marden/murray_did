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
        
        def create_soldier_table(table_name):
            
            query = ''' CREATE TABLE ''' + table_name + ''' (
                            TimeStamp timestamp,
                            Entity varchar(255),
                            EntityValue int
                        ); '''
            cursor.execute(query)
            connection.commit()
            print("sent command")
        
        table_name = argv[0]
        create_soldier_table(table_name)

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