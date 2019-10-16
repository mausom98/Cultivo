"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Manufacturer = (function (_super) {
    tslib_1.__extends(Manufacturer, _super);
    function Manufacturer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "io.worldsibu.manufacturer";
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Manufacturer.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Manufacturer.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number()),
        convector_core_model_1.Default(function () { return Date.now(); })
    ], Manufacturer.prototype, "updated", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Manufacturer.prototype, "price", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Manufacturer.prototype, "fat", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Manufacturer.prototype, "snf", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Manufacturer.prototype, "pi", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Manufacturer.prototype, "productsAvailable", void 0);
    return Manufacturer;
}(convector_core_model_1.ConvectorModel));
exports.Manufacturer = Manufacturer;
//# sourceMappingURL=manufacturer.model.js.map