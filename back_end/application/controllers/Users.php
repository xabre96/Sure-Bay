<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Users extends REST_Controller {


	// public function __construct()
	// {
	// 		parent::__construct();
	// }

	public function index_get()
	{
		$id = (int) $this->get('id');
		if($id==NULL){
			$this->load->model('Users_model','users');
			$data  = $this->users->get_records();
			if($data==null){
					$this->response(array("message"=>"Empty"), 204);
			}
			else{
					$this->response($data, 200);
			}
		}
		else{
			$this->load->model('Users_model','users');
			$data  = $this->users->get_user($id);
			if($data==null){
					$this->response(array("message"=>"Empty"),204);
			}
			else{
					$this->response($data, 200);
			}
		}
	}

	public function index_post()
	{
		$data = $this->post();
		$this->load->model('Users_model','users');
		$id = $this->users->insert_users($data);
		$this->response(array('user_id' => $id), 200);
	}

	public function index_put(){
		$id = (int) $this->get('id');
		$data = $this->put();
		$this->load->model('Users_model','users');
		$id = $this->users->update($data, $id);
		$this->response(array('ok' => 'Success'), 200);
	}

	public function index_delete(){
		$id = (int) $this->get('id');
		$this->load->model('Users_model','users');
		$id = $this->users->delete($id);
		$this->response(array('ok' => 'Success'), 200);
	}

	public function index_options(){
		 die();
	}
}
