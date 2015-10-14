<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Survey extends REST_Controller {


	public function __construct()
	{
			parent::__construct();
			$this->load->model('Survey_model','survey');
	}



	public function index_get()
	{
		// $id = (int) $this->get("id");
		// if($id===0){
		// 	$data  = $this->users->get_records();
		// 	if($data==null){
		// 			$this->response(array("message"=>"User does not exist"), REST_Controller::HTTP_BAD_REQUEST);
		// 	}
		// 	else{
		// 			$this->response($data, 200);
		// 	}
		// }
		// else{
		// 	$data  = $this->users->get_user($id);
		// 	if($data==null){
		// 			$this->response(array("message"=>"User does not exist"), REST_Controller::HTTP_BAD_REQUEST);
		// 	}
		// 	else{
		// 			$this->response($data, 200);
		// 	}
		// }
	}

	public function index_post()
	{
		// $data = $this->post();
		// $data = $this->security->xss_clean($data);
    //
		// 	$this->load->model('Users_model','users');
		// 	$confirm = $this->users->insert_users($data);
		// 	if($confirm === false){
		// 			$this->response(array("message" => "Failed"), 500);
		// 	}else{
		// 			$this->response(array($confirm), 200);
		// 	}
	}

	public function index_put(){
		// $id = (int) $this->get('id');
		// $data = $this->put();
		// $this->load->model('Users_model','users');
		// $id = $this->users->update($data, $id);
		// $this->response(array('ok' => 'Success'), 200);
	}

	public function index_delete(){
		// $id = (int) $this->get('id');
		// $this->load->model('Users_model','users');
		// $id = $this->users->delete($id);
		// $this->response(array('ok' => 'Success'), 200);
	}



	public function index_options(){
		 die();
	}
}
