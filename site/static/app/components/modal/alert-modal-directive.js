/*!
 * Alert Modal.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

var deps = ['ModalService'];
return {alertModal: deps.concat(factory)};

function factory(ModalService) {
  return ModalService.directive({
    name: 'alert',
    transclude: true,
    templateUrl: '/app/components/modal/alert-modal.html',
    scope: {
      header: '@modalHeader',
      ok: '@modalOk',
      cancel: '@modalCancel'
    }
  });
}

});