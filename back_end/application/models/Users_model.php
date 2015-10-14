<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model {

  public function get_records(){
		return $this->db->get('user_account')->result();
	}

  public function get_user($id){
		return $this->db->where('user_id',$id)->get('user_details')->result();
	}

  public function login($data){
    $query = $this->db->get_where("user_account", array("username" => $data['userName'], "password" => $data['passWord']));
  //  if(!$query->result()){
  //    return false;
  //  }else{
  //    return true;
  //  }
  return $query->result();
  }

  public function insert_users($data){
    // $this->load->library('encrypt');
    // $pass = 123;
    // $pass = $this->encrypt->encode($data['passWord']);

    $data1=array(
      "username"=>$data['userName'],
      "password"=>$data['passWord'],
      "user_type"=>$data['userType']
    );

    $this->db->insert('user_account',$data1);

    $data2=array(
      "user_id" => $this->db->insert_id(),
      "firstname"=>$data['firstName'],
      "lastName"=>$data['lastName'],
      "email"=>$data['email'],
      "address"=>$data['address'],
      "birthday"=>$data['birthday']
    );

   $confirm = $this->db->insert('user_profile',$data2);
     if(!$confirm){
       return false;
     }else{
      return true;
     }
  }
  public function activate_user($data, $id){
    $data['type'] = (int) $data['type'];
    $data = array("status"=>$data['type']);
    $confirm = $this->db->where('user_id',$id)->update('user_account',$data);
    if(!$confirm){
      return false;
    }else{
      return true;
    }
  }
  public function update_user($data, $id){
    $data1=array(
      "username"=>$data['userName']
      // "password"=>$pass,
      // "user_type"=>$data['userType']
    );
    $this->db->where('user_id',$id)->update('user_account',$data1);
    $data2=array(
      "firstname"=>$data['firstName'],
      "lastName"=>$data['lastName'],
      "email"=>$data['email'],
      "address"=>$data['address'],
      // "birthday"=>$data['birthday']
    );
		$confirm = $this->db->where('user_id',$id)->update('user_profile',$data2);
    if(!$confirm){
      return false;
    }else{
     return true;
    }
	}

  public function delete_user($id){
    $this->db->where('user_id',$id)->delete('user_profile');
		$confirm = $this->db->where('user_id',$id)->delete('user_account');
    if(!$confirm){
      return false;
    }else{
     return true;
    }
	}
}
