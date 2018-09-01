
pragma solidity ^0.4.24;



contract ERC20Interface {
    function totalSupply() public constant returns (uint256);
    function balance() public constant returns (uint256);
    function balanceOf(address _owner) public  constant returns (uint256);
    function transfer(address _to, uint256 _value) public returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function approve(address _spender, uint256 _value) public returns (bool success);
    function allowance(address _owner, address _spender) public constant returns (uint256 remaining);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

contract VentureCoin is ERC20Interface{
    

    using SafeMath for uint256;
    string public constant symbol = "VC";
    string public constant name = "Venturecoin";
    uint32 public constant decimals   = 18;
    uint256 public totalSupply        = 0 ;
    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;

    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0));
        require(_value <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
    
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
  

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0));
        
        require(_value <= allowed[_from][msg.sender]);

        
        require(_value <= balances[_from]);
        
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }


    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }


    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
     }


    function increaseApproval(address _spender, uint _addedValue) public returns (bool success) {
        allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);
        Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
        return true;
    }


    function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool success) {
        uint oldValue = allowed[msg.sender][_spender];
        if (_subtractedValue > oldValue) {
          allowed[msg.sender][_spender] = 0;
        } else {
          allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);
        }
        Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
        return true;
     }
    
    function totalSupply() public constant returns (uint256){
        return totalSupply;
    }
    function getBalance(address _a) internal constant returns(uint256){
        return balances[_a];
    }
    function balance() constant returns (uint256) {
        return getBalance(msg.sender);
    }

    function balanceOf(address _owner) public constant returns (uint256 balance) {
        return getBalance( _owner );
    }


}




contract VolunteerXControl is VentureCoin{

    event ContractUpgrade(address newContract);

    address public ceoAddress;
    // address public cfoAddress; //takeout
    address public cooAddress; //

    modifier onlyCEO() {
        require(msg.sender == ceoAddress);
        _;
    }


    modifier onlyCOO() {
        require(msg.sender == cooAddress);
        _;
    }


    function setCEO(address _newCEO) external onlyCEO {
        require(_newCEO != address(0));
        ceoAddress = _newCEO;
        ContractUpgrade(_newCEO);
        
    }


    function setCOO(address _newCOO) external onlyCEO {
        require(_newCOO != address(0));
        cooAddress = _newCOO;
        ContractUpgrade(_newCOO);
    }
}


contract VolunteerX is VolunteerXControl{


    struct InvestItem{
        string  title;
        uint256 needCoin; //NOS
        string  desc;
        bool    donate;  //是否已捐赠
        bool    enable;
        address wallet;
    }

    //公益item
    struct WelfareItem{
        string  title;
        uint256 needPerson;
        uint256 bonus;
        string  desc;
        uint256 endTime;
    }

    struct User{
        string  name;
        uint256 regTime;
        uint8   identity;//0志愿者,1公益组织,
        bool    enable;
        address addr;
    }
   

    uint256 userIndex;
    uint256 investItemIndex;
    uint256 welfareItemIndex;

    uint256 contractBalance;    //NOS
    mapping (uint256 =>User)            indexToUser;
    mapping (address=>uint256)          addressToUserIndex;
    mapping (uint256 =>InvestItem)      indexToInvestItem;
    mapping (uint256 =>WelfareItem)     indexToWelfareItem;
    mapping (uint256 =>address)         welfareItemIndexToOwner;
    mapping (uint256 =>uint256[])       investItemIndexToVoters;
    mapping (uint256=>uint256)          investItemIndexToToken;
    mapping (uint256=>uint256[])        userIndexToJoinItems;
    mapping (uint256=>uint256[])        welfareItemIndexToUsers;
    mapping (uint256=>mapping (uint256=>bool)) userJoinItemStatus;
    
    //匿名函数
    function () payable{
        sendCoin();
    }

    constructor () public {
        ceoAddress=msg.sender;
    }

     //捐赠
    function sendCoin() payable public returns (bool){
        contractBalance=contractBalance.add(msg.value);
    }

   

   

    function  newInvestItem(string _title,string _desc,uint256 _needCoin,address _wallet) external returns (bool) {
        User user=indexToUser[addressToUserIndex[msg.sender]];
        require(user.identity>0&&user.enable);
        
        investItemIndex++;
        InvestItem memory item=InvestItem({
            title:_title,
            needCoin:_needCoin,
            desc:_desc,
            donate:false,
            enable:false,
            wallet:_wallet
        });
        indexToInvestItem[investItemIndex]=item;
        return true;
    }
    function  newWelfareItem(string _title,string _desc,uint256 _needPerson,uint256 _bonus,  uint256 _endTime) external returns (bool) {
        User user=indexToUser[addressToUserIndex[msg.sender]];
        require(user.identity>0&&user.enable);
      
        welfareItemIndex++;
        WelfareItem memory item=WelfareItem({
            title:_title,
            needPerson:_needPerson,
            desc:_desc,
            endTime:_endTime,
            bonus:_bonus
        });
        indexToWelfareItem[welfareItemIndex]=item;
        welfareItemIndexToOwner[welfareItemIndex]=msg.sender;
        return true;

    }

    function login(string _name,uint8 _type) external  returns (bool) {
        
        uint256 uid=addressToUserIndex[msg.sender];
        if(uid>0){
            return indexToUser[uid].enable;
        }
        return _register(_name,_type,msg.sender);
    }
    function _register(string _name,uint8 _type,address _addr) internal  returns (bool) {
        userIndex++;
        bool _enable=_type>0 ? false:true;
        User memory user=User({
            name:_name,
            regTime:uint(now),
            identity:_type,
            enable:_enable,
            addr:_addr
        });
        indexToUser[userIndex]=user;
        addressToUserIndex[_addr]=userIndex;
        return _enable;
    }

    //审核公益组织
    function verifyUser(uint256 _userId,bool _enable) onlyCOO external returns (bool) {
        require(_userId<=userIndex);
        User memory user=indexToUser[_userId];
        user.enable=_enable;
        indexToUser[_userId]=user;
    }
    //审核公益组织 from
    function verifyUserByAddr(address _addr,bool _enable) onlyCOO external returns (bool) {
        require(_addr!=address(0));
        uint256 uid=addressToUserIndex[_addr];
        User memory user=indexToUser[uid];
        user.enable=_enable;
        indexToUser[uid]=user;
    }

    //审核待捐赠Item
    function verifyInvestItem(uint256 _itemId,bool _enable)  onlyCOO external returns (bool) {
        require(_itemId<=investItemIndex);
        InvestItem memory item = indexToInvestItem[_itemId];
        item.enable=_enable;
        indexToInvestItem[_itemId]=item;

    }
    //审核公益通过人员,奖励
    function passWelfareItem(uint256 _itemId, uint256 _userId)  external returns (bool) {
        require(_userId<=userIndex);
       
        User memory organ=indexToUser[addressToUserIndex[msg.sender]];
        require(organ.identity==1&&welfareItemIndexToOwner[_itemId]==msg.sender);
        require(!userJoinItemStatus[_userId][_itemId]);
        userJoinItemStatus[_userId][_itemId]=true;
        WelfareItem item=indexToWelfareItem[_itemId];
        
        return _bonusVolunteer(_userId,item.bonus);
    }

    //奖励给志愿者
    function _bonusVolunteer(uint256 _userId,uint256 _value) internal returns (bool) {
        address addr=indexToUser[_userId].addr;
        balances[addr] = balances[addr].add(_value);
        totalSupply=totalSupply.add(_value);
        return true;
    }


    
    //加入公益项目
    function joinWelfareItem(uint256 _itemId)  external returns (bool) {
        require(_itemId<=welfareItemIndex);
        uint256 uid=addressToUserIndex[msg.sender];
        uint256[] items= userIndexToJoinItems[uid];
        for (uint i = 0; i < items.length; i++) {
            if(items[i]==_itemId) return false;
        }
        uint256[] users= welfareItemIndexToUsers[_itemId];
        for (i = 0; i < users.length; i++) {
            if(users[i]==uid) return false;
        }

        items.push(_itemId);
        userIndexToJoinItems[uid]=items;
        users.push(uid);
        welfareItemIndexToUsers[_itemId]=users;
        return true;
    }

    //投票捐赠项目
    function voteInvestItem(uint256 _itemId, uint256 _token) external returns (bool){
        uint256 uid = addressToUserIndex[msg.sender];
        InvestItem item =indexToInvestItem[_itemId];
        require(!item.donate);
        require(balances[msg.sender]>=_token);
        
        balances[msg.sender]=balances[msg.sender].sub(_token);
        investItemIndexToToken[_itemId]=investItemIndexToToken[_itemId].add(_token);

        if(investItemIndexToToken[_itemId]>=item.needCoin){
            _donateInvestItem(_itemId);
        }
        uint256[] voters=investItemIndexToVoters[_itemId];
        for (uint i = 0; i < voters.length; i++) {
            if(voters[i]==uid) return true;
        }
        voters.push(uid);
        investItemIndexToVoters[_itemId]=voters;
        return true;
    }

    //捐给待捐赠项目
    function _donateInvestItem(uint256 _itemId)  internal returns  (bool) {
        InvestItem item=indexToInvestItem[_itemId];
        require(!item.donate);
        item.donate=true;
        indexToInvestItem[_itemId]=item;
        contractBalance=contractBalance.sub(item.needCoin);
        item.wallet.transfer(item.needCoin);                //NOS
        return true;
    }


    //禁用公益组织
    function cancelUserByAddr(address _addr,bool _enable) onlyCOO external returns (bool){
        require(_addr!=address(0));
        uint256 uid=addressToUserIndex[_addr];
        User user=indexToUser[uid];
        user.enable=_enable;
        indexToUser[uid]=user;
        return true;
    }

    /*
     *   ============= getter ================
     */

    //读取合约余额
    function getContractBalance()   view returns(uint) {
        return contractBalance;
    }
    //读取ID
    function getUserId() view returns(uint256 _userId){
        _userId=addressToUserIndex[msg.sender];
    }
    //读取个人信息
    function getUserById(uint256  _userId)  view returns(string _name,uint256 _regTime,uint8 _identity,bool _enable, uint256[] _itemIds){
        User memory user = indexToUser[_userId];
        _name = user.name;
        _regTime=user.regTime;
        _identity=user.identity;
        _enable=user.enable;
        _itemIds=userIndexToJoinItems[_userId];
    }

    //读取公益项目id数组
    function getWelfareItems() view returns (uint256[]) {
        uint256[] wIds;
        for (uint i = 1; i <= welfareItemIndex; i++) {
            wIds.push(i);
        }
        return wIds; 
    }
    //读取公益项目 _userIds是已参与的ID数组
    function getWelfareItemById(uint256 _itemId) view returns(string _title,string _desc,uint256 _needPerson,uint256 _bonus, uint256 _endTime,uint256[] _passUIds,uint256[] _unPassUIds,uint256[] _userIds) {
        WelfareItem item=indexToWelfareItem[_itemId];
        _title=item.title;
        _desc=item.desc;
        _needPerson=item.needPerson;
        _bonus=item.bonus;
        _endTime=item.endTime;
        _userIds=welfareItemIndexToUsers[_itemId];
        
        uint256[] passUIds;
        uint256[] unPassUIds;
        for (uint i = 0; i < _userIds.length; i++) {
            if(getUserJoinItemStatus(_userIds[i], _itemId)){
                passUIds.push(_userIds[i]);
            }else unPassUIds.push(_userIds[i]);
        }
        _passUIds=passUIds;
        _unPassUIds=unPassUIds;
    }
    //读取待捐赠项目id数组
    function getInvestItems() view returns (uint256[]) {
        uint256[] iIds;
        for (uint i = 1; i <= investItemIndex; i++) {
            iIds.push(i);
        }
        return iIds; 
    }
    //读取待捐赠项目 _enable=false 未通过 _userIds是已投票的ID数组
    function getInvestItemById(uint256 _itemId) view returns(string _title,string _desc,uint256 _needCoin,bool _enable,uint256 _voteNum,bool _donate,address _wallet, uint256[] _userIds) {
        InvestItem item=indexToInvestItem[_itemId];
        _title=item.title;
        _desc=item.desc;
        _needCoin=item.needCoin;
        _enable=item.enable;
        _donate=item.donate;
        _wallet=item.wallet;
        _voteNum=investItemIndexToToken[_itemId];
        _userIds=investItemIndexToVoters[_itemId];
    }
   

    //读取用户参与公益项目状态
    function getUserJoinItemStatus(uint256 _userId,uint256 _itemId) view returns (bool) {
        return userJoinItemStatus[_userId][_itemId];
    }

    //读取待审核公益组织
    function getVerifyUsers() view returns (uint256[]){
        uint256[] uIds;
        for (uint i = 1; i <= userIndex; i++) {
            User user=indexToUser[i];
            if(!user.enable){
                uIds.push(i);
            }
        }
        return uIds;
    }

    


     //test 
    function getToken() {
        balances[msg.sender]=balances[msg.sender].add(1000);
    }

}

/**
 * @title SafeMath v0.1.9
 * @dev Math operations with safety checks that throw on error
 * change notes:  original SafeMath library from OpenZeppelin modified by Inventor
 * - added sqrt
 * - added sq
 * - added pwr 
 * - changed asserts to requires with error log outputs
 * - removed div, its useless
 */
library SafeMath {
    
    /**
    * @dev Multiplies two numbers, throws on overflow.
    */
    function mul(uint256 a, uint256 b) 
        internal 
        pure 
        returns (uint256 c) 
    {
        if (a == 0) {
            return 0;
        }
        c = a * b;
        require(c / a == b, "SafeMath mul failed");
        //  require(c / a == b);        
        return c;
    }

    /**
    * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b)
        internal
        pure
        returns (uint256) 
    {
        require(b <= a, "SafeMath sub failed");
        // require(b <= a);
        return a - b;
    }

    /**
    * @dev Adds two numbers, throws on overflow.
    */
    function add(uint256 a, uint256 b)
        internal
        pure
        returns (uint256 c) 
    {
        c = a + b;
        require(c >= a, "SafeMath add failed");
        return c;
    }
    
    /**
     * @dev gives square root of given x.
     */
    function sqrt(uint256 x)
        internal
        pure
        returns (uint256 y) 
    {
        uint256 z = ((add(x,1)) / 2);
        y = x;
        while (z < y) 
        {
            y = z;
            z = ((add((x / z),z)) / 2);
        }
    }
    
    /**
     * @dev gives square. multiplies x by x
     */
    function sq(uint256 x)
        internal
        pure
        returns (uint256)
    {
        return (mul(x,x));
    }
    
    /**
     * @dev x to the power of y 
     */
    function pwr(uint256 x, uint256 y)
        internal 
        pure 
        returns (uint256)
    {
        if (x==0)
            return (0);
        else if (y==0)
            return (1);
        else 
        {
            uint256 z = x;
            for (uint256 i=1; i < y; i++)
                z = mul(z,x);
            return (z);
        }
    }
}