<?php

ini_set( 'display_errors', 'On' );
error_reporting( E_ALL );

class DatabaseConnection{

    private	$host = "localhost";
    private $user = "root";
    private $password = "";
    private $base = "time_manager";
    private $pdo;


    public function __construct()
    {
        try{

            $this->pdo = new PDO('mysql:host='.$this->host.';dbname='.$this->base,$this->user,$this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->query('SET NAMES utf8');
            $this->pdo->query("SET NAMES `utf8` COLLATE `utf8_polish_ci`");

            return $this->pdo;

        } catch (PDOException $e)
        {
            exit("Database connectioon error");
        }

    }


    public function select($query)
    {
        $stmt=$this->pdo->prepare($query);

        if($stmt==true)
        {
            if($stmt->execute())
            {
                $DBresult = $stmt ->fetchAll(PDO::FETCH_ASSOC);
                return $DBresult;
            }
            else
            {
                throw new Exception("cannot load with db, request: $request", 1);
            }
        }
        else
            throw new Exception("cannot load with db, request: $request", 1);
    }

    public function insert($query)
    {

        $this->pdo->query('SET NAMES utf8');
        $this->pdo->query("SET NAMES `utf8` COLLATE `utf8_polish_ci`");
        $stmt=$this->pdo->prepare($query);

        if($stmt==true)
        {
            if($stmt->execute())
            {
                return true;
            }	 else
                throw new Exception("cannot insert into  db, request: $request", 1);
        }
        else
            throw new Exception("cannot insert into  db, request: $request", 1);
    }

    public function update($query)
    {
        $stmt=$this->pdo->prepare($query);

        if($stmt==true)
        {
            if($stmt->execute())
            {
                return true;
            }	 else
                throw new Exception("cannot insert into  db, request: $request", 1);
        }
        else
            throw new Exception("cannot insert into  db, request: $request", 1);
    }
}

?>