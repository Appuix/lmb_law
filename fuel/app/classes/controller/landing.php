<?php

class Controller_Landing extends Controller_App
{
	public function action_index()
	{
		Casset::css('home.css');
		$this->template->content = View::forge('landing/index');
	}

	public function action_disclaimer()
	{
		Casset::css('disclaimer.css');
		$this->template->content = View::forge('landing/disclaimer');
	}

	public function action_404()
	{
		$this->template->content = View::forge('landing/404');
	}
}
