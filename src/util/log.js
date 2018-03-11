const ERROR_MAP = {
    '-6': '请输入验证码',
    '-8': '请输入验证码',
    '62752': '可能含有具备安全风险的链接，请检查',
    '64505': '发送预览失败，请稍后再试',
    '64504': '保存图文消息发送错误，请稍后再试',
    '64518': '正文只能包含一个投票',
    '10704': '该素材已被删除',
    '10705': '该素材已被删除',
    '10701': '用户已被加入黑名单，无法向其发送消息',
    '10703': '对方关闭了接收消息',
    '10700': '1.接收预览消息的微信尚未关注公众号，请先扫码关注<br /> 2.如果已经关注公众号，请查看微信的隐私设置（在手机微信的“我->设置->隐私->添加我的方式”中），并开启“可通过以下方式找到我”的“手机号”、“微信号”、“QQ号”，否则可能接收不到预览消息',
    '64503': '1.接收预览消息的微信尚未关注公众号，请先扫码关注<br /> 2.如果已经关注公众号，请查看微信的隐私设置（在手机微信的“我->设置->隐私->添加我的方式”中），并开启“可通过以下方式找到我”的“手机号”、“微信号”、“QQ号”，否则可能接收不到预览消息',
    '64502': '你输入的微信号不存在，请重新输入',
    '64501': '你输入的帐号不存在，请重新输入',
    '412': '图文中含非法外链',
    '64515': '当前素材非最新内容，请重新打开并编辑',
    '320001': '该素材已被删除，无法保存',
    '64702': '标题超出64字长度限制',
    '64703': '摘要超出120字长度限制',
    '64704': '推荐语超出140字长度限制',
    '64515': '当前素材非最新内容',
    '200041': '此素材有文章存在违规，无法编辑',
    '64506': '保存失败,链接不合法',
    '64507': '内容不能包含链接，请调整',
    '64510': '内容不能包含语音，请调整',
    '64511': '内容不能包多个语音，请调整',
    '64512': '文章中语音错误,请使用语音添加按钮重新添加。',
    '64508': '查看原文链接可能具备安全风险，请检查',
    '64550': '请勿插入不合法的图文消息链接',
    '64558': '请勿插入图文消息临时链接，链接会在短期失效',
    '64559': '请勿插入未群发的图文消息链接',
    '-99': '内容超出字数，请调整',
    '64705': '内容超出字数，请调整',
    '-1': '系统错误，请注意备份内容后重试',
    '-2': '参数错误，请注意备份内容后重试',
    '200002': '参数错误，请注意备份内容后重试',
    '64509': '正文中不能包含超过3个视频，请重新编辑正文后再保存。',
    '-5': '服务错误，请注意备份内容后重试。',
    '64513': '请从正文中选择封面，再尝试保存。',
    '-206': '目前，服务负荷过大，请稍后重试。',
    '10801': '标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。',
    '10802': '作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。',
    '10803': '敏感链接，请重新添加。',
    '10804': '摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。',
    '10806': '正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。',
    '10807': '内容不能违反公众平台协议、相关法律法规和政策，请重新编辑。',
    '-2e4': '登录态超时，请重新登录。',
    '64513': '封面必须存在正文中，请检查封面',
    '64551': '请检查图文消息中的微视链接后重试。',
    '64552': '请检查阅读原文中的链接后重试。',
    '64553': '请不要在图文消息中插入超过5张卡券。请删减卡券后重试。',
    '64554': '在当前情况下不允许在图文消息中插入卡券，请删除卡券后重试。',
    '64555': '请检查图文消息卡片跳转的链接后重试。',
    '64556': '卡券不属于该公众号，请删除后重试',
    '64557': '卡券无效，请删除后重试。',
    '13002': '该广告卡片已过期，删除后才可保存成功',
    '13003': '已有文章插入过该广告卡片，一个广告卡片仅可插入一篇文章',
    '13004': '该广告卡片与图文消息位置不一致',
    '15801': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '15802': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '15803': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '15804': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '15805': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '15806': '你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容',
    '1530503': '请勿添加其他公众号的主页链接',
    '1530504': '请勿添加其他公众号的主页链接',
    '1530510': '链接已失效，请在手机端重新复制链接',
    '153007': '很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频<br />3、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片',
    '153008': '很抱歉，原创声明不成功|你的文章内容少于300字，未达到申请原创内容声明的字数要求。',
    '153009': '很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片',
    '153010': '很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频',
    '1530511': '链接已失效，请在手机端重新复制链接',
    '220001': '"素材管理"中的存储数量已达到上限，请删除后再操作。',
    '220002': '你的图片库已达到存储上限，请进行清理。',
    '153012': '请设置转载类型',
    '200042': '图文中包含的小程序卡片不能多于20个',
    '200043': '图文中包含没有关联的小程序，请删除后再保存',
    '64601': '一篇文章只能插入一个广告卡片',
    '64602': '尚未开通文中广告位，但文章中有广告',
    '64603': '文中广告前不足300字',
    '64604': '文中广告后不足300字',
    '64605': '文中不能同时插入文中广告和互选广告',
    '65101': '图文模版数量已达到上限，请删除后再操作',
    '64560': '请勿插入历史图文消息页链接',
    '64561': '请勿插入mp.weixin.qq.com域名下的非图文消息链接',
    '64562': '请勿插入非mp.weixin.qq.com域名的链接',
    '67016': '视频还在审核中，若审核失败则将无法播放',
    '67015': '视频已被下架或删除，无法播放，请重新选择',
    '67012': '设置失败，定时时间与已有互选广告订单时间冲突',
    '67013': '设置失败，定时时间超过卡券有效期',
    '200013': '操作太频繁，请稍后再试',
    '67014': '该时刻定时消息过多，请选择其他时刻',
    '67011': '设置的定时群发时间错误，请重新选择',
    '64004': '今天的群发数量已到，无法群发或剩余定时群发数量不足',
    '67008': '消息中可能含有具备安全风险的链接，请检查',
    '200008': '请输入验证码',
    '14002': '没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行卡券投放。',
    '200001': '文章包含的语音已被删除，请重新添加。',
    '14003': '投放用户缺少测试权限，请先设置白名单',
    '67010': '本月发表付费文章已达10篇'
};

const msg = (code) => {
    return ERROR_MAP[code] || '系统繁忙，请稍后重试';
};

const userMsg = (e) => {
    if (typeof e === 'object' && typeof e.base_resp === 'object') {
        e.base_resp.msg = msg(e.base_resp.ret);
    }
    return e;
}

const Log = {
    info(e) {
        console.log(`\x1b[34m${JSON.stringify(userMsg(e))}\x1b[0m`);
    },
    error(e) {
        console.error(`\x1b[31m${JSON.stringify(userMsg(e))}\x1b[0m`);
    },
    msg
};



export default Log;