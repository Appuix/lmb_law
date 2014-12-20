<?php

class Controller_App extends Controller_Base
{
	public function before()
	{
		parent::before();

		if (! Input::is_ajax())
		{
			$this->_init_nav();
			$this->_init_content();
			$this->_init_assets();
			$this->_init_template_vars();
			$this->_init_footer();
		}
	}

	private function _init_nav()
	{
		$this->template->nav = View::forge('nav/nav', array('type' => Uri::segment(1)));
	}

	private function _init_footer()
	{
		$this->template->footer = View::forge('footer/footer');
	}


	private function _init_template_vars()
	{
		$this->page = new Model_Page;
		$this->template->set_global('page', $this->page, FALSE);
	}

	private function _init_content()
	{
		$path = $_SERVER['SERVER_ADDR'] == '127.0.0.1' ? $_SERVER['DOCUMENT_ROOT'] . '/lmb_law/content/' : '/var/www/lmb_law/content/';
		$page = Uri::segment(1) ? Uri::segment(1) . '.json' : 'home.json';
		$contents = File::read_dir($path);
		$exist = in_array($page, $contents);
		$this->content = $exist ? json_decode(file_get_contents($path . $page)) : null;
		$this->template->set_global('content', $this->content, FALSE);
	}

	private function _init_assets()
	{
		Casset::css('main.css');
		
		Casset::js('jquery-1.11.2.js');
		Casset::js('main.js');
	}
}