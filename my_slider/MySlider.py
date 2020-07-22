# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MySlider(Component):
    """A MySlider component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- picUrl (string; optional): The picUrl displayed in the string.
总预览图路径
- step (number; optional): 预览图总时间（61.17）
- value (string | number | dict | list; optional): The value displayed in the input.
返回开始时间和结束时间 {value:{imgStartTime,imgEndTime}}
- range (string | dict; optional): 返回范围数据的范围(图片可视区时间段)
- width (string | number; default 10): 可视区宽度默认10分钟
- setTimeShow (boolean; default True): 选择开始时间框是否显示
- typeSite (boolean; default False): 计算模式时间模式，true为底部图片为根据，false为mark块为依据
- height (number; default 80): 图片高度"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, picUrl=Component.UNDEFINED, step=Component.UNDEFINED, value=Component.UNDEFINED, range=Component.UNDEFINED, width=Component.UNDEFINED, setTimeShow=Component.UNDEFINED, typeSite=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'picUrl', 'step', 'value', 'range', 'width', 'setTimeShow', 'typeSite', 'height']
        self._type = 'MySlider'
        self._namespace = 'my_slider'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'picUrl', 'step', 'value', 'range', 'width', 'setTimeShow', 'typeSite', 'height']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MySlider, self).__init__(**args)
