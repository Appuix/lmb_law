<?php

class Controller_Landing extends Controller_App
{
	public function action_index()
	{
		if(Session::get_flash('success')){
			$flash = Session::get_flash('success');
			$type = 'success';
		}else if(Session::get_flash('error')){
			$flash = Session::get_flash('error');
			$type = 'error';
		}else{
			$flash = null;
			$type = null;
		}

		Casset::css('home.css');
		$this->template->content = View::forge('landing/index');
		$this->template->content->contact_us = View::forge('landing/contact_us', array(
			'flash' => $flash,
			'type' => $type,
		));
		Casset::js('contact_us.js');
	}

	public function action_disclaimer()
	{
		Casset::css('disclaimer.css');
		$this->template->content = View::forge('landing/disclaimer');
	}

	public function action_contact_us()
	{
		if(Session::get_flash('success')){
			$flash = Session::get_flash('success');
			$type = 'success';
		}else if(Session::get_flash('error')){
			$flash = Session::get_flash('error');
			$type = 'error';
		}else{
			$flash = null;
			$type = null;
		}

		Casset::css('contact_us.css');
		$this->template->content = View::forge('landing/contact_us', array(
			'flash' => $flash,
			'type' => $type,
		));
		Casset::js('contact_us.js');
	}

	public function post_contact_us_message()
	{
		$post = $this->post_data('first_name', 'last_name', 'email', 'phone', 'message');

		$email = Email::forge();
		$email->from($post->email->value, "{$post->first_name->value} {$post->last_name->value} / ({$post->phone->value[0]}) {$post->phone->value[1]}-{$post->phone->value[2]}");
		$email->to('laila@lmblawfirm.com'); //laila@lmblawfirm.com
		$email->subject('Message from lmblawfirm.com');
		// $email->html_body(View::forge('emails/message', array('post' => $post)));
		$email->body($post->message->value);
		$email->alt_body($post->message->value);
		$email->send() ? Session::set_flash('success', "Hello <span class=italic>{$post->first_name->value}</span>,<br>Your Message Has Been Sent.<br>We will contact you within 24 Hours!") : Session::set_flash('error', "Sorry {$post->first_name->value},<br>There Seems To Be An Issue.<br>Please Try Again Later.");
		$this->redirect('contact_us');
	}

	public function action_404()
	{
		$this->template->content = View::forge('landing/404');
	}
}
