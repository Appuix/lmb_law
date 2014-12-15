<?php

class Model_Page
{
	public function get_industries()
	{
		$path = $_SERVER['SERVER_ADDR'] == '127.0.0.1' ? $_SERVER['DOCUMENT_ROOT'] : '/var/www';
		$path = $path . '/textingbase_marketing/content/opts/industries.json';
		return json_decode(file_get_contents($path));
	}

	public function get_messages_range()
	{
		$path = $_SERVER['SERVER_ADDR'] == '127.0.0.1' ? $_SERVER['DOCUMENT_ROOT'] : '/var/www';
		$path = $path . '/textingbase_marketing/content/opts/range.json';
		return json_decode(file_get_contents($path));
	}

	public function get_sales_opportunities()
	{
		$path = $_SERVER['SERVER_ADDR'] == '127.0.0.1' ? $_SERVER['DOCUMENT_ROOT'] : '/var/www';
		$path = $path . '/textingbase_marketing/content/home.json';
		return json_decode(file_get_contents($path));
	}

	public function send_inquiry_email($inquiry)
	{
		$email = Email::forge();
		$email->from('Inquiry@TextingBase.com', 'Texting Base');
		$email->to('ashaffer@appuix.com');
		$email->subject('Texting Base Inquiry Email');
		$email->html_body(View::forge('emails/inquiry', array('inquiry' => $inquiry)));
		$email->alt_body($inquiry->message);
		$email->send();
		return true;
	}

	public function send_contact_us_email($contact_us)
	{
		$email = Email::forge();
		$email->from($contact_us->email, $contact_us->first_name.' '.$contact_us->last_name);
		$email->to('ashaffer@appuix.com');
		$email->subject('Texting Base Contact Us Email');
		// $email->body($contact_us->message);
		$email->html_body(View::forge('emails/contact_us', array('contact_us' => $contact_us)));
		$email->alt_body($contact_us->message);
		$email->send();
		return true;
	}

	public function send_affiliate_application_email($affiliate_application)
	{
		$email = Email::forge();
		$email->from($affiliate_application->email, $affiliate_application->first_name.' '.$affiliate_application->last_name);
		$email->to('ashaffer@appuix.com');
		$email->subject('Texting Base Affiliate Application Email');
		// $email->body($affiliate_application->message);
		$email->html_body(View::forge('emails/affiliate_application', array('affiliate_application' => $affiliate_application)));
		$email->attach(DOCROOT.'assets/resume/'.$affiliate_application->resume);
		$email->alt_body($affiliate_application->questions);
		$email->send();
		return true;
	}

	public function opt_out_contact($message_id)
	{
		$params = (object) array(
			'message_id' => $message_id,
		);
		$curl = Request::forge('http://alpha.textingbase.com/optout_contact', 'curl');
		$curl->set_method('post');
		$curl->set_params($params);
		return $curl->execute();
	}

	public function opt_out_contact_manual($tb_number, $phone_number)
	{
		$params = (object) array(
			'tb_number' => $tb_number,
			'phone_number' => $phone_number,
		);
		$curl = Request::forge('http://alpha.textingbase.com/optout_manual', 'curl');
		$curl->set_method('post');
		$curl->set_params($params);
		return $curl->execute();
	}

}