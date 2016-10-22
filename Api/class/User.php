<?php

/**
 * Created by PhpStorm.
 * User: Czajmen
 * Date: 22.10.2016
 * Time: 15:21
 */
class User
{
        private $imie;
        private $nazwisko;
        private $email;
        private $answers;

    public function __contruct($imie,$nazwisko,$email,$answers)
    {
        $this->imie = $imie;
        $this->nazwisko = $nazwisko;
        $this->email = $email;
        $this->answers = $answers;
    }

    public function SaveToDB(){

          return true;
    }



}

?>