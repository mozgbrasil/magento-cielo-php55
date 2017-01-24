/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */
AdminOrder.prototype.dataLoaded = function(){

	console.log(arguments.callee.name);
	
    // Clear local storage, in which the credit card info is stored, when creating a new order
    localStorage.clear();

    this.dataShow();
};
