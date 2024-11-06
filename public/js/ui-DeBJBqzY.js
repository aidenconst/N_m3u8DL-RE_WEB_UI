const e={required:"请输入{0}",selectRequired:"请选择{0}"},r={input:"请输入",select:"请选择"},t={title:"请完成安全验证",sliderSuccessText:"验证通过",sliderDefaultText:"请按住滑块拖动",sliderRotateDefaultTip:"点击图片可刷新",sliderRotateFailTip:"验证失败",sliderRotateSuccessTip:"验证成功，耗时{0}秒",alt:"支持img标签src属性值",refreshAriaLabel:"刷新验证码",confirmAriaLabel:"确认选择",confirm:"确认",pointAriaLabel:"点击点",clickInOrder:"请依次点击"},o={pageNotFound:"哎呀！未找到页面",pageNotFoundDesc:"抱歉，我们无法找到您要找的页面。",forbidden:"哎呀！访问被拒绝",forbiddenDesc:"抱歉，您没有权限访问此页面。",internalError:"哎呀！出错了",internalErrorDesc:"抱歉，服务器遇到错误。",offline:"离线页面",offlineError:"哎呀！网络错误",offlineErrorDesc:"抱歉，无法连接到互联网，请检查您的网络连接并重试。",comingSoon:"即将推出",http:{requestTimeout:"请求超时，请稍后再试。",networkError:"网络异常，请检查您的网络连接后重试。",badRequest:"请求错误。请检查您的输入并重试。",unauthorized:"登录认证过期，请重新登录后继续。",forbidden:"禁止访问, 您没有权限访问此资源。",notFound:"未找到, 请求的资源不存在。",internalServerError:"内部服务器错误，请稍后再试。"}},i={document:"文档",qa:"问题 & 帮助",setting:"设置",logoutTip:"是否退出登录？",viewAll:"查看所有消息",notifications:"通知",markAllAsRead:"全部标记为已读",clearNotifications:"清空",checkUpdatesTitle:"新版本可用",checkUpdatesDescription:"点击刷新以获取最新版本",search:{title:"搜索",searchNavigate:"搜索导航菜单",select:"选择",navigate:"导航",close:"关闭",noResults:"未找到搜索结果",noRecent:"没有搜索历史",recent:"搜索历史"},lockScreen:{title:"锁定屏幕",screenButton:"锁定",password:"密码",placeholder:"请输入锁屏密码",unlock:"点击解锁",errorPasswordTip:"密码错误，请重新输入",backToLogin:"返回登录",entry:"进入系统"}},c={formRules:e,placeholder:r,captcha:t,fallback:o,widgets:i};export{t as captcha,c as default,o as fallback,e as formRules,r as placeholder,i as widgets};
