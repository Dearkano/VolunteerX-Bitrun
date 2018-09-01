const bytecode = "60806040526000805534801561001457600080fd5b5060038054600160a060020a03191633179055612ec8806100366000396000f3006080604052600436106101cc5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306006be781146101d757806306b373ec1461023c57806306fdde031461026b578063095ea7b3146102f55780630a0f8168146103195780630fbf2b2f1461034a57806318160ddd1461037057806321d0999d1461039757806321df0da7146103bf57806323b872dd146103d657806327d7874c146104005780632ba73c15146104215780632ebcb65314610442578063313ce567146104575780633883b01814610485578063466a50781461065b5780636618846314610696578063693ee9f9146106ba5780636ed6da9e146106d55780636f9fb98a146107c55780636facbd97146107da57806370a08231146107f5578063714cadaf1461081657806395d89b411461084b578063a9059cbb14610860578063aa72f9f914610884578063b047fb5014610899578063b69ef8a8146108ae578063c621fe97146108c3578063ce974a16146108cb578063d15909ca146108e3578063d73dd623146108f8578063dd62ed3e1461091c578063ed2c317b14610943578063f5ee024614610960578063f5f9443914610aca578063f8b758e014610af0575b6101d4610b0d565b50005b3480156101e357600080fd5b506101ec610b29565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610228578181015183820152602001610210565b505050509050019250505060405180910390f35b34801561024857600080fd5b50610257600435602435610bd1565b604080519115158252519081900360200190f35b34801561027757600080fd5b50610280610d23565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102ba5781810151838201526020016102a2565b50505050905090810190601f1680156102e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030157600080fd5b50610257600160a060020a0360043516602435610d5a565b34801561032557600080fd5b5061032e610dc0565b60408051600160a060020a039092168252519081900360200190f35b34801561035657600080fd5b50610257600160a060020a03600435166024351515610dcf565b34801561037c57600080fd5b50610385610ede565b60408051918252519081900360200190f35b3480156103a357600080fd5b50610257602460048035828101929101359060ff903516610ee5565b3480156103cb57600080fd5b506103d4610f66565b005b3480156103e257600080fd5b50610257600160a060020a0360043581169060243516604435610f9a565b34801561040c57600080fd5b506103d4600160a060020a0360043516611113565b34801561042d57600080fd5b506103d4600160a060020a03600435166111a0565b34801561044e57600080fd5b5061038561122d565b34801561046357600080fd5b5061046c611240565b6040805163ffffffff9092168252519081900360200190f35b34801561049157600080fd5b5061049d600435611245565b60405180806020018060200189815260200188815260200187815260200180602001806020018060200186810386528e818151815260200191508051906020019080838360005b838110156104fc5781810151838201526020016104e4565b50505050905090810190601f1680156105295780820380516001836020036101000a031916815260200191505b5086810385528d5181528d516020918201918f019080838360005b8381101561055c578181015183820152602001610544565b50505050905090810190601f1680156105895780820380516001836020036101000a031916815260200191505b508681038452895181528951602091820191808c01910280838360005b838110156105be5781810151838201526020016105a6565b50505050905001868103835288818151815260200191508051906020019060200280838360005b838110156105fd5781810151838201526020016105e5565b50505050905001868103825287818151815260200191508051906020019060200280838360005b8381101561063c578181015183820152602001610624565b505050509050019d505050505050505050505050505060405180910390f35b34801561066757600080fd5b506102576024600480358281019290820135918135918201910135604435600160a060020a036064351661155a565b3480156106a257600080fd5b50610257600160a060020a0360043516602435611700565b3480156106c657600080fd5b506102576004356024356117f0565b3480156106e157600080fd5b506106ed600435611810565b60405180806020018681526020018560ff1660ff1681526020018415151515815260200180602001838103835288818151815260200191508051906020019080838360005b8381101561074a578181015183820152602001610732565b50505050905090810190601f1680156107775780820380516001836020036101000a031916815260200191505b508381038252845181528451602091820191808701910280838360005b838110156107ac578181015183820152602001610794565b5050505090500197505050505050505060405180910390f35b3480156107d157600080fd5b50610385611993565b3480156107e657600080fd5b50610257600435602435611999565b34801561080157600080fd5b50610385600160a060020a0360043516611b50565b34801561082257600080fd5b506102576024600480358281019290820135918135918201910135604435606435608435611b61565b34801561085757600080fd5b50610280611ce7565b34801561086c57600080fd5b50610257600160a060020a0360043516602435611d1e565b34801561089057600080fd5b506101ec611e01565b3480156108a557600080fd5b5061032e611e82565b3480156108ba57600080fd5b50610385611e91565b610257610b0d565b3480156108d757600080fd5b50610257600435611ea1565b3480156108ef57600080fd5b506101ec611fde565b34801561090457600080fd5b50610257600160a060020a036004351660243561200c565b34801561092857600080fd5b50610385600160a060020a03600435811690602435166120a5565b34801561094f57600080fd5b5061025760043560243515156120d0565b34801561096c57600080fd5b50610978600435612287565b6040805190810187905285151560608201526080810185905283151560a0820152600160a060020a03831660c08201526101008082528951908201528851819060208083019160e0840191610120850191908e019080838360005b838110156109eb5781810151838201526020016109d3565b50505050905090810190601f168015610a185780820380516001836020036101000a031916815260200191505b5084810383528b5181528b516020918201918d019080838360005b83811015610a4b578181015183820152602001610a33565b50505050905090810190601f168015610a785780820380516001836020036101000a031916815260200191505b508481038252855181528551602091820191808801910280838360005b83811015610aad578181015183820152602001610a95565b505050509050019b50505050505050505050505060405180910390f35b348015610ad657600080fd5b50610257600160a060020a03600435166024351515612493565b348015610afc57600080fd5b50610257600435602435151561266a565b600854600090610b23903463ffffffff6128da16565b60085590565b606060006001815b6005548211610b7d575060008181526009602052604090206002810154610100900460ff161515610b72578254600181018455600084815260209020018290555b600190910190610b31565b825460408051602080840282018101909252828152918591830182828015610bc457602002820191906000526020600020905b815481526020019060010190808311610bb0575b5050505050935050505090565b336000908152600a6020908152604080832054858452600b909252822060038101548390819060ff1615610c0457600080fd5b33600090815260016020526040902054861115610c2057600080fd5b33600090815260016020526040902054610c40908763ffffffff61294c16565b33600090815260016020908152604080832093909355898252600f90522054610c6f908763ffffffff6128da16565b6000888152600f60205260409020819055600184015411610c9557610c93876129c3565b505b50506000858152600e60205260408120905b8154811015610ce157838282815481101515610cbf57fe5b90600052602060002001541415610cd95760019450610d19565b600101610ca7565b815460018101835560008381526020808220909201869055888152600e909152604090208254610d1391908490612cbd565b50600194505b5050505092915050565b60408051808201909152600b81527f56656e74757265636f696e000000000000000000000000000000000000000000602082015281565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b600354600160a060020a031681565b60045460009081908190600160a060020a03163314610ded57600080fd5b600160a060020a0385161515610e0257600080fd5b5050600160a060020a0383166000908152600a602090815260408083205480845260099092529091206002808201805461ff001916610100871515810291909117909155825483928392610e6792849283926001831615026000190190911604612d0d565b50600182810154828201556002928301805493909201805460ff191660ff94851617808255835461010090819004909516151590940261ff0019909416939093178084559154600160a060020a03620100009182900416026201000060b060020a0319909216919091179091559250505092915050565b6000545b90565b336000908152600a602052604081205481811115610f1e57600081815260096020526040902060020154610100900460ff169150610f5e565b610f5b85858080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050508433612b20565b91505b509392505050565b33600090815260016020526040902054610f88906103e863ffffffff6128da16565b33600090815260016020526040902055565b6000600160a060020a0383161515610fb157600080fd5b600160a060020a0384166000908152600260209081526040808320338452909152902054821115610fe157600080fd5b600160a060020a03841660009081526001602052604090205482111561100657600080fd5b600160a060020a03841660009081526001602052604090205461102f908363ffffffff61294c16565b600160a060020a038086166000908152600160205260408082209390935590851681522054611064908363ffffffff6128da16565b600160a060020a0380851660009081526001602090815260408083209490945591871681526002825282812033825290915220546110a8908363ffffffff61294c16565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b600354600160a060020a0316331461112a57600080fd5b600160a060020a038116151561113f57600080fd5b60038054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116811790915560408051918252517f450db8da6efbe9c22f2347f7c2021231df1fc58d3ae9a2fa75d39fa4461993059181900360200190a150565b600354600160a060020a031633146111b757600080fd5b600160a060020a03811615156111cc57600080fd5b60048054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116811790915560408051918252517f450db8da6efbe9c22f2347f7c2021231df1fc58d3ae9a2fa75d39fa4461993059181900360200190a150565b336000908152600a602052604090205490565b601281565b6000818152600c602090815260408083208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152606094859490938493849387938493849392879283928392918691908301828280156112f05780601f106112c5576101008083540402835291602001916112f0565b820191906000526020600020905b8154815290600101906020018083116112d357829003601f168201915b50505050509b50836003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561138f5780601f106113645761010080835404028352916020019161138f565b820191906000526020600020905b81548152906001019060200180831161137257829003601f168201915b50505050509a50836001015499508360020154985083600401549750601160008e815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561140857602002820191906000526020600020905b8154815260200190600101908083116113f4575b50505050509450600090505b84518110156114ab5761143e858281518110151561142e57fe5b906020019060200201518e6117f0565b156114755782858281518110151561145257fe5b6020908102909101810151825460018101845560009384529190922001556114a3565b81858281518110151561148457fe5b6020908102909101810151825460018101845560009384529190922001555b600101611414565b8254604080516020808402820181019092528281529185918301828280156114f257602002820191906000526020600020905b8154815260200190600101908083116114de575b505050505096508180548060200260200160405190810160405280929190818152602001828054801561154457602002820191906000526020600020905b815481526020019060010190808311611530575b5050505050955050505050919395975091939597565b600080611565612d81565b336000908152600a6020908152604080832054835260099091528120600281015490935060ff161180156115a257506002820154610100900460ff165b15156115ad57600080fd5b6006805460010190556040805160e06020601f8c01819004028201810190925260c081018a815290918291908c908c9081908501838280828437820191505050505050815260200186815260200188888080601f0160208091040260200160405190810160405280939291908181526020018383808284375050509284525050600060208084018290526040808501839052600160a060020a038a166060909501949094526006548252600b8152929020835180519495508594919361167893508492910190612db6565b5060208281015160018301556040830151805161169b9260028501920190612db6565b50606082015160039091018054608084015160a090940151600160a060020a031662010000026201000060b060020a03199415156101000261ff001994151560ff19909316929092179390931617929092161790556001925050509695505050505050565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561175557336000908152600260209081526040808320600160a060020a038816845290915281205561178a565b611765818463ffffffff61294c16565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600091825260126020908152604080842092845291905290205460ff1690565b606060008060006060611821612e24565b6000878152600960209081526040918290208251815460026001821615610100026000190190911604601f8101849004909302810160c090810190945260a081018381529093919284928491908401828280156118bf5780601f10611894576101008083540402835291602001916118bf565b820191906000526020600020905b8154815290600101906020018083116118a257829003601f168201915b5050509183525050600182015460208083019190915260029092015460ff8082166040808501919091526101008304909116151560608085019190915262010000909204600160a060020a0316608090930192909252835184840151858401519286015160008e8152601087528590208054865181890281018901909752808752939d50919b509299509197509394509092909183018282801561198257602002820191906000526020600020905b81548152602001906001019080831161196e575b505050505091505091939590929450565b60085490565b60006119a3612e24565b6005546000908411156119b557600080fd5b336000908152600a6020908152604080832054835260098252918290208251815460026001821615610100026000190190911604601f8101849004909302810160c090810190945260a08101838152909391928492849190840182828015611a5e5780601f10611a3357610100808354040283529160200191611a5e565b820191906000526020600020905b815481529060010190602001808311611a4157829003601f168201915b5050509183525050600182810154602083015260029092015460ff808216604080850191909152610100830482161515606085015262010000909204600160a060020a031660809093019290925283015192945091909116148015611ad957506000858152600d6020526040902054600160a060020a031633145b1515611ae457600080fd5b600084815260126020908152604080832088845290915290205460ff1615611b0b57600080fd5b5060008381526012602090815260408083208784528252808320805460ff19166001179055600c90915290206002810154611b47908590612c2f565b95945050505050565b6000611b5b82612ca2565b92915050565b600080611b6c612e52565b336000908152600a6020908152604080832054835260099091528120600281015490935060ff16118015611ba957506002820154610100900460ff165b1515611bb457600080fd5b6007805460010190556040805160c06020601f8d01819004028201810190925260a081018b815290918291908d908d9081908501838280828437820191505050505050815260200187815260200186815260200189898080601f01602080910402602001604051908101604052809392919081815260200183838082843750505092845250505060209081018690526007546000908152600c8252604090208251805193945084939192611c6d92849290910190612db6565b5060208281015160018301556040830151600283015560608301518051611c9a9260038501920190612db6565b50608091909101516004909101556007546000908152600d60205260409020805473ffffffffffffffffffffffffffffffffffffffff191633179055600192505050979650505050505050565b60408051808201909152600281527f5643000000000000000000000000000000000000000000000000000000000000602082015281565b6000600160a060020a0383161515611d3557600080fd5b33600090815260016020526040902054821115611d5157600080fd5b33600090815260016020526040902054611d71908363ffffffff61294c16565b3360009081526001602052604080822092909255600160a060020a03851681522054611da3908363ffffffff6128da16565b600160a060020a0384166000818152600160209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b6060600060015b6006548111611e2f5781546001818101845560008481526020902090910182905501611e08565b815460408051602080840282018101909252828152918491830182828015611e7657602002820191906000526020600020905b815481526020019060010190808311611e62575b50505050509250505090565b600454600160a060020a031681565b6000611e9c33612ca2565b905090565b60008060008060006007548611151515611eba57600080fd5b336000908152600a602090815260408083205480845260109092528220909550935091505b8254821015611f1c57858383815481101515611ef757fe5b90600052602060002001541415611f115760009450611fd5565b600190910190611edf565b505060008481526011602052604081205b8054821015611f6a57838183815481101515611f4557fe5b90600052602060002001541415611f5f5760009450611fd5565b600190910190611f2d565b8254600181018455600084815260208082209092018890558581526010909152604090208354611f9c91908590612cbd565b508054600181018255600082815260208082209092018690558781526011909152604090208154611fcf91908390612cbd565b50600194505b50505050919050565b6060600060015b6007548111611e2f5781546001818101845560008481526020902090910182905501611fe5565b336000908152600260209081526040808320600160a060020a0386168452909152812054612040908363ffffffff6128da16565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60006120da612e24565b600454600160a060020a031633146120f157600080fd5b60055484111561210057600080fd5b6000848152600960209081526040918290208251815460026001821615610100026000190190911604601f8101849004909302810160c090810190945260a0810183815290939192849284919084018282801561219e5780601f106121735761010080835404028352916020019161219e565b820191906000526020600020905b81548152906001019060200180831161218157829003601f168201915b5050509183525050600182015460208083019190915260029092015460ff8082166040808501919091526101008304909116151560608085019190915262010000909204600160a060020a03166080909301929092528615159084015260008781526009835220825180519394508493919261221f92849290910190612db6565b50602082015160018201556040820151600290910180546060840151608090940151600160a060020a031662010000026201000060b060020a03199415156101000261ff001960ff90951660ff19909316929092179390931617929092161790555092915050565b6000818152600b602090815260408083208054825160026001831615610100026000190190921691909104601f81018590048502820185019093528281526060948594909384938493849384938993929183919083018282801561232c5780601f106123015761010080835404028352916020019161232c565b820191906000526020600020905b81548152906001019060200180831161230f57829003601f168201915b50505060028085018054604080516020601f6000196101006001871615020190941695909504928301859004850281018501909152818152959e5090935091508301828280156123bd5780601f10612392576101008083540402835291602001916123bd565b820191906000526020600020905b8154815290600101906020018083116123a057829003601f168201915b50505050509750806001015496508060030160019054906101000a900460ff1695508060030160009054906101000a900460ff1693508060030160029054906101000a9004600160a060020a03169250600f60008b8152602001908152602001600020549450600e60008b815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561248057602002820191906000526020600020905b81548152602001906001019080831161246c575b5050505050915050919395975091939597565b60008061249e612e24565b600454600160a060020a031633146124b557600080fd5b600160a060020a03851615156124ca57600080fd5b600160a060020a0385166000908152600a602090815260408083205480845260098352928190208151815460026001821615610100026000190190911604601f8101859004909402810160c090810190935260a08101848152949650939092849284919084018282801561257f5780601f106125545761010080835404028352916020019161257f565b820191906000526020600020905b81548152906001019060200180831161256257829003601f168201915b5050509183525050600182015460208083019190915260029092015460ff8082166040808501919091526101008304909116151560608085019190915262010000909204600160a060020a03166080909301929092528715159084015260008581526009835220825180519394508493919261260092849290910190612db6565b50602082015160018201556040820151600290910180546060840151608090940151600160a060020a031662010000026201000060b060020a03199415156101000261ff001960ff90951660ff199093169290921793909316179290921617905550909392505050565b6000612674612d81565b600454600160a060020a0316331461268b57600080fd5b60065484111561269a57600080fd5b6000848152600b60209081526040918290208251815460026001821615610100026000190190911604601f8101849004909302810160e090810190945260c081018381529093919284928491908401828280156127385780601f1061270d57610100808354040283529160200191612738565b820191906000526020600020905b81548152906001019060200180831161271b57829003601f168201915b5050505050815260200160018201548152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127e45780601f106127b9576101008083540402835291602001916127e4565b820191906000526020600020905b8154815290600101906020018083116127c757829003601f168201915b50505091835250506003919091015460ff80821615156020808501919091526101008304909116151560408085019190915262010000909204600160a060020a031660609093019290925285151560808401526000878152600b835220825180519394508493919261285b92849290910190612db6565b5060208281015160018301556040830151805161287e9260028501920190612db6565b50606082015160039091018054608084015160a090940151600160a060020a031662010000026201000060b060020a03199415156101000261ff001994151560ff19909316929092179390931617929092161790555092915050565b81810182811015611b5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f536166654d61746820616464206661696c656400000000000000000000000000604482015290519081900360640190fd5b6000828211156129bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f536166654d61746820737562206661696c656400000000000000000000000000604482015290519081900360640190fd5b50900390565b6000818152600b60205260408120600381015460ff16156129e357600080fd5b60038101805460ff191660019081179091556000848152600b6020526040902082548392612a27918391859160026000199282161561010002929092011604612d0d565b506001820154816001015560028201816002019080546001816001161561010002031660029004612a59929190612d0d565b506003918201805491909201805460ff191660ff928316151517808255835461ff0019909116610100918290049093161515029190911780825591546201000060b060020a03199092166201000092839004600160a060020a03169092029190911790556001810154600854612ace9161294c565b6008556003810154600182015460405162010000909204600160a060020a0316916108fc82150291906000818181858888f19350505050158015612b16573d6000803e3d6000fd5b5060019392505050565b600080612b2b612e24565b600580546001019055600060ff861611612b46576001612b49565b60005b6040805160a0810182528881524260208083019190915260ff8916828401528315156060830152600160a060020a0388166080830152600554600090815260098252929092208151805194965091945084939092612bab928492910190612db6565b50602082810151600183015560408084015160029093018054606086015160809096015160ff1990911660ff9095169490941761ff00191661010095151595909502949094176201000060b060020a03191662010000600160a060020a039485160217909355600554969091166000908152600a9091522093909355949350505050565b600082815260096020908152604080832060020154620100009004600160a060020a03168084526001909252822054612c6890846128da565b600160a060020a03821660009081526001602052604081209190915554612c95908463ffffffff6128da16565b6000555060019392505050565b600160a060020a031660009081526001602052604090205490565b828054828255906000526020600020908101928215612cfd5760005260206000209182015b82811115612cfd578254825591600101919060010190612ce2565b50612d09929150612e82565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612d465780548555612cfd565b82800160010185558215612cfd57600052602060002091601f0160209004820182811115612cfd578254825591600101919060010190612ce2565b6040805160c081018252606080825260006020830181905292820181905281018290526080810182905260a081019190915290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612df757805160ff1916838001178555612cfd565b82800160010185558215612cfd579182015b82811115612cfd578251825591602001919060010190612e09565b6040805160a08101825260608082526000602083018190529282018390528101829052608081019190915290565b60a06040519081016040528060608152602001600081526020016000815260200160608152602001600081525090565b610ee291905b80821115612d095760008155600101612e885600a165627a7a723058209fbe5feb78a7f80190189e66c8f32161172faf7859c02383151a9f4e214511ae0029"


const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getVerifyUsers",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"name": "_token",
				"type": "uint256"
			}
		],
		"name": "voteInvestItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_enable",
				"type": "bool"
			}
		],
		"name": "cancelUserByAddr",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_type",
				"type": "uint8"
			}
		],
		"name": "login",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCEO",
				"type": "address"
			}
		],
		"name": "setCEO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCOO",
				"type": "address"
			}
		],
		"name": "setCOO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserId",
		"outputs": [
			{
				"name": "_userId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "getWelfareItemById",
		"outputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_desc",
				"type": "string"
			},
			{
				"name": "_needPerson",
				"type": "uint256"
			},
			{
				"name": "_bonus",
				"type": "uint256"
			},
			{
				"name": "_endTime",
				"type": "uint256"
			},
			{
				"name": "_passUIds",
				"type": "uint256[]"
			},
			{
				"name": "_unPassUIds",
				"type": "uint256[]"
			},
			{
				"name": "_userIds",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_desc",
				"type": "string"
			},
			{
				"name": "_needCoin",
				"type": "uint256"
			},
			{
				"name": "_wallet",
				"type": "address"
			}
		],
		"name": "newInvestItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseApproval",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userId",
				"type": "uint256"
			},
			{
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "getUserJoinItemStatus",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userId",
				"type": "uint256"
			}
		],
		"name": "getUserById",
		"outputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_regTime",
				"type": "uint256"
			},
			{
				"name": "_identity",
				"type": "uint8"
			},
			{
				"name": "_enable",
				"type": "bool"
			},
			{
				"name": "_itemIds",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"name": "_userId",
				"type": "uint256"
			}
		],
		"name": "passWelfareItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_desc",
				"type": "string"
			},
			{
				"name": "_needPerson",
				"type": "uint256"
			},
			{
				"name": "_bonus",
				"type": "uint256"
			},
			{
				"name": "_endTime",
				"type": "uint256"
			}
		],
		"name": "newWelfareItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInvestItems",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cooAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sendCoin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "joinWelfareItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getWelfareItems",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseApproval",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userId",
				"type": "uint256"
			},
			{
				"name": "_enable",
				"type": "bool"
			}
		],
		"name": "verifyUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "getInvestItemById",
		"outputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_desc",
				"type": "string"
			},
			{
				"name": "_needCoin",
				"type": "uint256"
			},
			{
				"name": "_enable",
				"type": "bool"
			},
			{
				"name": "_voteNum",
				"type": "uint256"
			},
			{
				"name": "_donate",
				"type": "bool"
			},
			{
				"name": "_wallet",
				"type": "address"
			},
			{
				"name": "_userIds",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_enable",
				"type": "bool"
			}
		],
		"name": "verifyUserByAddr",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"name": "_enable",
				"type": "bool"
			}
		],
		"name": "verifyInvestItem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "newContract",
				"type": "address"
			}
		],
		"name": "ContractUpgrade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]

module.exports = {
	abi,
	bytecode
  }