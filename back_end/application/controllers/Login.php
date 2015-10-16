<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Login extends REST_Controller {


	public function __construct()
	{
			parent::__construct();
			$this->load->model('Users_model','users');
	}

	public function index_put(){
		$id = (int) $this->get('id');
		$data = $this->put();
		if(!$data){
			$this->response(array("message" => "Failed"), 400);
		}else{
				$confirm = $this->users->changePass($data, $id);
			if($confirm === false){
					$this->response(array("message" => "Failed"), 400);
			}else{
					$this->response(array("message" => "Password Changed"), 200);
			}
		}
	}
	public function index_post()
	{
		$data = $this->post();
		$data = $this->security->xss_clean($data);
			$confirm = $this->users->login($data);
			if(!$confirm){
					$this->response(array("message" => "Failed"), 400);
			}else{
					$this->response($confirm, 201);
			}
	}


	public function index_options(){
		 die();
	}
}
