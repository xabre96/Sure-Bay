<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey_model extends CI_Model {

  public function __construct()
  {
      parent::__construct();
  }

  // public function get_records(){
	// 	return $this->db->get('user_account')->result();
	// }
  //
  // public function get_user($id){
	// 	return $this->db->where('user_id',$id)->get('user_details')->result();
	// }
  //
  // public function login($data){
  //   $query = $this->db->get_where("user_account", array("username" => $data['userName'], "password" => $data['passWord']));
  //  if(!$query->result()){
  //    return false;
  //  }else{
  //    return true;
  //  }
  // }
  //
  // public function insert_users($data){
  //   // $this->load->library('encrypt');
	// 	// $pass = $this->encrypt->encode(123);
  //   $pass = 123;
  //   if($data['userType']==-"Admin"){
  //     $data['userType'] = 1;
  //   }
  //   else{
  //     $data['userType'] = 0;
  //   }
  //
  //   $data1=array(
  //     "username"=>$data['userName'],
  //     "password"=>$pass,
  //     "user_type"=>$data['userType']
  //   );
  //
  //   $this->db->insert('user_account',$data1);
  //
  //   $data2=array(
  //     "user_id" => $this->db->insert_id(),
  //     "firstname"=>$data['firstName'],
  //     "lastName"=>$data['lastName'],
  //     "email"=>$data['email'],
  //     "address"=>$data['address'],
  //     "birthday"=>$data['birthday']
  //   );
  //
  //  $confirm = $this->db->insert('user_profile',$data2);
  //    if(!$confirm){
  //      return false;
  //    }
  //    return true;
  // }
  //
  // public function update($data, $id){
	// 	return $this->db->where('id',$id)->update('tasks',$data);
	// }
  //
  // public function delete($id){
	// 	return $this->db->where('id',$id)->delete('user_account');
	// }
}
