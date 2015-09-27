<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model {

  public function get_records(){
		return $this->db->get('user_account')->result_object();
	}

  public function get_user($id){
		return $this->db->where('user_id',$id)->get('user_account')->result_object();
	}

  public function insert_users($data){
    $this->db->insert('user_account',$data);
		return $this->db->insert_id();
  }

  public function update($data, $id){
		return $this->db->where('id',$id)->update('tasks',$data);
	}

  public function delete($id){
		return $this->db->where('id',$id)->delete('user_account');
	}
}
