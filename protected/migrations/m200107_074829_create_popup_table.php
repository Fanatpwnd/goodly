<?php

class m200107_074829_create_popup_table extends CDbMigration
{
	public function up()
	{
		$this->createTable('tbl_popup', array(
            'id' => 'pk',
            'title' => 'string NOT NULL',
			'content' => 'text',
			'visible' => 'boolean DEFAULT FALSE',
			'hits' => 'integer DEFAULT 0',
        ));
	}

	public function down()
	{
		$this->dropTable('tbl_popup');
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}
