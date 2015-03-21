angular.module("umbraco").controller("Feola.StatePicker", function($scope) {
	
	$scope.picked = new Array();
	$scope.arrayStates =  [
	  "AL", "AK", "AR", 
	  "AZ", "CA", "CO", "CT", "DE", "DC", 
	  "FL", "GA", "HI", "ID", "IL", "IN", 
	  "IA", "KS", "KY", "LA", "ME", "MD", 
	  "MA", "MI", "MN", "MS", "MO", "MT", 
	  "NE", "NV", "NH", "NJ", "NM", "NY", 
	  "NC", "ND", "OH", "OK", "OR", "PA", 
	  "RI", "SC", "SD", "TN", "TX", "UT", 
	  "VA", "VT", "WA", "WV", "WI", "WY" ];
	
	$scope.load = function (){
		if($scope.model.value != null && $scope.model.value != "")
			$scope.picked = $scope.model.value.split(',');
			
		  $('#map').usmap({  
			stateHoverStyles: {fill: '#53A93F'},
			stateStyles: {fill: '#000000'},
			labelBackingHoverStyles: {fill: '#53A93F'},
			'click' : function(event, data) {
				$scope.changeStates(data.name);
			}
		  });
		  
		  angular.forEach($scope.picked, function(i){
			$('.Fill' + i).css({ fill: "#999999" });
		  });
		  
		  //$('#map text').attr("y", "6.5px");
	};
	
	$scope.isSelected = function(id){
		if($scope.picked.indexOf(id) == -1)
			return false;
		else
			return true;
	}
	
	$scope.changeStates = function(id){
		var index = $scope.picked.indexOf(id);
		if(index == -1){
			$scope.picked.push(id);
			$('.Fill' + id).css({ fill: "#999999" });
		}else{
			$scope.picked.splice( index, 1 );
			$('.Fill' + id).css({ fill: "" });
		}
		
		$scope.model.value = $scope.picked.join(",");
	};
	
	$scope.load();
});