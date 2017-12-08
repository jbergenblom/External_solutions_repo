/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../components/input-output/input-output';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
export class Wrapper_InputOutput {
  /*private*/ _eventHandler:Function;
  context:import0.InputOutput;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  subscription0:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.InputOutput(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_counter(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.counter = currValue;
      this._expr_0 = currValue;
    }
  }
  check_fixedValue(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.fixedValue = currValue;
      this._expr_1 = currValue;
    }
  }
  check_sum(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.sum = currValue;
      this._expr_2 = currValue;
    }
  }
  check_headline(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.headline = currValue;
      this._expr_3 = currValue;
    }
  }
  check_growingString(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.growingString = currValue;
      this._expr_4 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.stringChanged.subscribe(_eventHandler.bind(view,'stringChanged'))); }
  }
}
var renderType_InputOutput_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_InputOutput_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.InputOutput>;
  _InputOutput_0_3:Wrapper_InputOutput;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputOutput_Host0,renderType_InputOutput_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'input-output',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_InputOutput0(this.viewUtils,this,0,this._el_0);
    this._InputOutput_0_3 = new Wrapper_InputOutput(new import9.ElementRef(this._el_0),(null as any));
    this.compView_0.create(this._InputOutput_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._InputOutput_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InputOutput) && (0 === requestNodeIndex))) { return this._InputOutput_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InputOutput_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._InputOutput_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const InputOutputNgFactory:import8.ComponentFactory<import0.InputOutput> = new import8.ComponentFactory<import0.InputOutput>('input-output',View_InputOutput_Host0,import0.InputOutput);
const styles_InputOutput:any[] = ([] as any[]);
var renderType_InputOutput:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_InputOutput,{});
export class View_InputOutput0 extends import2.AppView<import0.InputOutput> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputOutput0,renderType_InputOutput,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n              ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n              ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n              ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_11:any = import3.inlineInterpolate(1,'',this.context.headline,'');
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_1,currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = import3.inlineInterpolate(1,'Counter: ',this.context.counter,'');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setText(this._text_4,currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = import3.inlineInterpolate(1,'Running total of counter values: ',this.context.sum,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_7,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import3.inlineInterpolate(1,'Growing string: ',this.context.growingString,'');
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_10,currVal_14);
      this._expr_14 = currVal_14;
    }
  }
}