<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Users extends REST_Controller {


	public function __construct()
	{
			parent::__construct();
			$this->load->model('Users_model','users');
	}

		public function user_get(){
			// $id = (int) $this->get("id");
			// echo $id	;
			// $data = $this->get();
			// var_dump($_GET);
			// $data = $this->security->xss_clean($data);
			// $confirm  = $this->users->login($data);
			// if($confirm == false){
			// 	$this->response(array("message" => "user and password does not exist"), REST_Controller:: HTTP_BAD_REQUEST);
			// }else{
			// $this->response(array("asd" => "asda"), REST_Controller::HTTP_OK);
			// }
		}

	public function index_get()
	{
		$id = (int) $this->get("id");
		if($id===0){
			$data  = $this->users->get_records();
			if($data==null){
					$this->response(array("message"=>"User does not exist"), REST_Controller::HTTP_BAD_REQUEST);
			}
			else{
					$this->response($data, 200);
			}
		}
		else{
			$data  = $this->users->get_user($id);
			if($data==null){
					$this->response(array("message"=>"User does not exist"), REST_Controller::HTTP_BAD_REQUEST);
			}
			else{
					$this->response($data, 200);
			}
		}
	}

	public function index_post()
	{
		$data = $this->post();
		$data = $this->security->xss_clean($data);
			$confirm = $this->users->insert_users($data);
			if($confirm === false){
					$this->response(array("message" => "Failed"), 400);
			}else{
					$this->response(array("message" => "User Created Successfully"), 201);
			}
	}

	public function index_put(){
		$id = (int) $this->get('id');
		$data = $this->put();
		$confirm = $this->users->update_user($data, $id);
		if($confirm === false){
				$this->response(array("message" => "Failed"), 400);
		}else{
				$this->response(array("message" => "User Updated Successfully"), 200);
		}
	}

	// public function index_put(){
	// 	$id = (int) $this->get('id');
	// 	$data = $this->put();
	// 	$confirm = $this->users->activate_user($data, $id);
	// 	if($confirm === false){
	// 			$this->response(array("message" => "Failed"), 400);
	// 	}else{
	// 			$this->response(array("message" => "User Activated Successfully"), 200);
	// 	}
	// }

	public function index_delete(){
		$id = (int) $this->get('id');
		$confirm = $this->users->delete_user($id);
		if($confirm === false){
				$this->response(array("message" => "Failed"), 400);
		}else{
			$this->response(array("message" => "User Deleted Successfully"), 200);
		}
	}



	public function index_options(){
		 die();
	}
}
