// Generated by CoffeeScript 1.7.1
(function() {
  var MWS_SELLERS, SellersClient, mws, requests, types,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  mws = require('./core');

  MWS_SELLERS = new mws.Service({
    name: "Sellers",
    group: "Sellers Retrieval",
    path: "/Sellers/2011-07-01",
    version: "2011-07-01",
    legacy: false
  });

  types = {
    ServiceStatus: mws.types.ServiceStatus
  };

  requests = {
    GetServiceStatus: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_SELLERS, 'GetServiceStatus', [], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    ListMarketplaceParticipations: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_SELLERS, 'ListMarketplaceParticipations', [], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    ListMarketplaceParticipationsByNextToken: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_SELLERS, 'ListMarketplaceParticipationsByNextToken', [new mws.Param('NextToken', true)], {}, null, init);
      }

      return _Class;

    })(mws.Request)
  };

  SellersClient = (function(_super) {
    __extends(SellersClient, _super);

    function SellersClient() {
      return SellersClient.__super__.constructor.apply(this, arguments);
    }

    SellersClient.prototype.getServiceStatus = function(cb) {
      return this.invoke(new requests.GetServiceStatus(), {}, (function(_this) {
        return function(res) {
          var status, _ref, _ref1;
          status = (_ref = (_ref1 = res.result) != null ? _ref1.Status : void 0) != null ? _ref : null;
          return cb(status, res);
        };
      })(this));
    };

    SellersClient.prototype.listMarketplaceParticipations = function(cb) {
      var opt, req;
      opt = {
        nextTokenCall: requests.ListMarketplaceParticipationsByNextToken
      };
      req = new requests.ListMarketplaceParticipations();
      return this.invoke(req, opt, (function(_this) {
        return function(res) {
          var markets, partips, _ref, _ref1, _ref2, _ref3;
          markets = (_ref = res != null ? (_ref1 = res.ListMarketplaces) != null ? _ref1.Marketplace : void 0 : void 0) != null ? _ref : null;
          partips = (_ref2 = res != null ? (_ref3 = res.ListParticipations) != null ? _ref3.Participation : void 0 : void 0) != null ? _ref2 : null;
          return cb({
            marketplaces: markets,
            participations: partips
          }, res);
        };
      })(this));
    };

    SellersClient.prototype.listMarketplaceParticipationsByNextToken = function(token, cb) {
      var opt, req;
      opt = {
        nextTokenCall: requests.ListMarketplaceParticipationsByNextToken
      };
      req = new requests.ListMarketplaceParticipationsByNextToken({
        NextToken: token
      });
      return this.invoke(req, opt, (function(_this) {
        return function(res) {
          var markets, partips, _ref, _ref1, _ref2, _ref3;
          markets = (_ref = res != null ? (_ref1 = res.ListMarketplaces) != null ? _ref1.Marketplace : void 0 : void 0) != null ? _ref : null;
          partips = (_ref2 = res != null ? (_ref3 = res.ListParticipations) != null ? _ref3.Participation : void 0 : void 0) != null ? _ref2 : null;
          return cb({
            marketplaces: markets,
            participations: partips
          }, res);
        };
      })(this));
    };

    return SellersClient;

  })(mws.Client);

  module.exports = {
    service: MWS_SELLERS,
    types: types,
    requests: requests,
    Client: SellersClient
  };

}).call(this);
