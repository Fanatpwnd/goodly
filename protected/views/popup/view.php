<?php
/* @var $this PopupController */
/* @var $model Popup */

$this->breadcrumbs=array(
	'Popups'=>array('index'),
	$model->title,
);

$this->menu=array(
	array('label'=>'List Popup', 'url'=>array('index')),
	array('label'=>'Create Popup', 'url'=>array('create')),
	array('label'=>'Update Popup', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete Popup', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Popup', 'url'=>array('admin')),
);
?>

<h1>View Popup #<?php echo $model->id; ?></h1>
<p><b>Код скрипта:</b></p>
<p style="padding: 10px; border: 1px solid gray; "><code>
&lt;script&gt;var popup_id = <?php echo $model->id; ?>; var popup_site = &quot;<?php echo Yii::app()->getBaseUrl(true); ?>&quot; &lt;/script&gt; <br>
&lt;script src=&quot;<?php echo Yii::app()->getBaseUrl(true); ?>/js/popup.js&quot;&gt;&lt;/script&gt;
</code></p>
<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'title',
		'content',
		'visible',
		'hits',
	),
)); ?>
