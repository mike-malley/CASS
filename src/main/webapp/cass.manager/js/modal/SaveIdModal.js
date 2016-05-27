/*
 Copyright 2015-2016 Eduworks Corporation and other contributing parties.

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
var SaveIdModal = (function(SaveIdModal){	

	function submitSave(){
		AppController.loginController.save(
			saveSuccess,
			saveFailure
		);
	}
	function saveSuccess()
	{
		ModalManager.hideModal();	
		
		AppMenu.prototype.rebuildIdentityList();
	}
	function saveFailure(err)
	{
		ViewManager.getView("#saveIdentityMessageContainer").displayAlert(err);
	}
	
	SaveIdModal.prototype.display = function(containerId, callback)
	{
		var view = this;
		$(containerId).load("partial/modal/saveId.html", function(){
			ViewManager.showView(new MessageContainer("saveId"), "#saveIdentityMessageContainer");
			
			$("#saveId").click(function(event){
				submitSave()
			});
			
			$("#skipSaveId").click(function(event){
				ModalManager.hideModal();
			});
			
			if(callback != undefined)
				callback();
		});
	}
	
	return SaveIdModal;
})(SaveIdModal);