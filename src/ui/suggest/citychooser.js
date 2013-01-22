/**
 * @author xuld
 */


include("ui/suggest/combobox.js");

var CityChooser = Class({

    constructor: function (provinces, cities) {

        provinces = Dom.get(provinces);
        cities = Dom.get(cities);

        var value1 = provinces.getText();
        var value2 = cities.getText();

        provinces = this.provinces = new ComboBox(provinces).addClass('ui-citychooser').setDropDownList(true);
        cities = this.cities = new ComboBox(cities).addClass('ui-citychooser').setDropDownList(true);

        if (CityChooser.cdata == null) {
            CityChooser.cdata = {};
            for (var city in CityChooser.data) {
                var zz = city.split('@');
                CityChooser.cdata[zz[1]] = CityChooser.data[city];
                provinces.items.add(zz[0]).value = zz[1];
            }
        }

        provinces.on('change', function () {
            var value = this.getValue();
            cities.items.clear();
            cities.setText('��ѡ��');
            cities.setValue(0);
            if (CityChooser.cdata[value])
                Object.each(CityChooser.cdata[value], function (value) {
                    var val = value.split('@');
                    cities.items.add(val[0]).value = val[1];
                });
        });

        if (!CityChooser.cdata[value1]) {
            provinces.setValue(0);
            provinces.setText('��ѡ��');
        } else {
            provinces.setValue(value1);
        }

        if (value2 != '0') {
            cities.setValue(value2);
        }

        provinces.selectedItem = cities.selectedItem = null;
    }

});



CityChooser.data = {
    "������@1": ["������@1", "������@2", "������@3", "������@4", "������@5", "��̨��@6", "ʯ��ɽ��@7", "������@8", "��ͷ����@9", "��ɽ��@10", "ͨ����@11", "˳����@12", "������@13", "��ƽ��@14", "������@15", "������@16", "ƽ����@17", "������@18", "��������@19"],
    "������@2": ["��ƽ��@20", "�Ӷ���@21", "������@22", "�Ͽ���@23", "�ӱ���@24", "������@25", "������@26", "������@27", "������@28", "������@29", "������@30", "������@31", "����@32", "������@33", "������@34", "������@35", "������@36", "������@541", "��������@37"],
    "�ӱ�ʡ@3": ["ʯ��ׯ��@38", "�żҿ���@39", "�е���@40", "�ػʵ���@41", "��ɽ��@42", "�ȷ���@43", "������@44", "������@45", "��ˮ��@46", "��̨��@47", "������@48", "��������@49"],
    "ɽ��ʡ@4": ["̫ԭ��@50", "��ͬ��@51", "˷����@52", "��Ȫ��@53", "������@54", "������@55", "������@56", "������@57", "������@58", "�ٷ���@59", "�˳���@60", "��������@61"],
    "����ʡ@5": ["������@75", "������@76", "������@77", "������@78", "��˳��@79", "��Ϫ��@80", "������@81", "��ɽ��@82", "������@83", "������@84", "Ӫ����@85", "�̽���@86", "������@87", "��«����@88", "��������@89"],
    "����ʡ@6": ["������@90", "�׳���@91", "��ԭ��@92", "������@93", "��ƽ��@94", "��Դ��@95", "ͨ����@96", "��ɽ��@97", "�ӱ߳�����������@98", "��������@99"],
    "�Ϻ���@7": ["������@114", "¬����@116", "������@117", "������@118", "������@119", "������@120", "բ����@121", "������@122", "������@123", "������@124", "��ɽ��@125", "�ζ���@126", "�ֶ�����@127", "��ɽ��@128", "�ɽ���@129", "������@130", "������@131", "�ϻ���@132", "������@133", "��������@134"],
    "����ʡ@8": ["�Ͼ���@135", "������@136", "���Ƹ���@137", "��Ǩ��@138", "������@139", "�γ���@140", "������@141", "̩����@142", "��ͨ��@143", "������@144", "������@145", "������@146", "������@147", "��������@148"],
    "�㽭ʡ@9": ["������@149", "������@150", "������@151", "��ɽ��@152", "������@153", "������@154", "������@155", "̨����@156", "������@157", "��ˮ��@158", "������@538", "��������@159"],
    "����ʡ@10": ["�Ϸ���@160", "������@161", "������@162", "������@163", "������@164", "������@165", "������@166", "����ɽ��@167", "�ߺ���@168", "ͭ����@169", "������@170", "��ɽ��@171", "������@172", "������@173", "������@174", "������@175", "������@540", "��������@176"],
    "����ʡ@11": ["������@177", "��ƽ��@178", "������@179", "������@180", "Ȫ����@181", "������@182", "������@183", "������@184", "������@185", "��������@186"],
    "����ʡ@12": ["�ϲ���@187", "�Ž���@188", "��������@189", "ӥ̶��@190", "������@191", "Ƽ����@192", "������@193", "������@194", "������@195", "�˴���@196", "������@197", "��������@198"],
    "ɽ��ʡ@13": ["������@199", "�ĳ���@200", "������@201", "��Ӫ��@202", "�Ͳ���@203", "Ϋ����@204", "��̨��@205", "������@206", "�ൺ��@207", "������@208", "������@209", "��ׯ��@210", "������@211", "̩����@212", "������@213", "������@214", "������@215", "��������@216"],
    "����ʡ@14": ["֣����@217", "����Ͽ��@218", "������@219", "������@220", "������@221", "�ױ���@222", "������@223", "������@224", "������@225", "������@226", "������@227", "������@228", "ƽ��ɽ��@229", "������@230", "������@231", "��Դ��@232", "�ܿ���@233", "פ������@234", "��������@235"],
    "���ɹ�@15": ["���ͺ�����@62", "��ͷ��@63", "�ں���@64", "������@65", "���ױ���@66", "�˰���@67", "���ֹ�����@69", "�����첼��@70", "�����׶���@72", "��������@73", "������˹��@555", "ͨ����@556", "��������@74"],
    "������ʡ@16": ["��������@100", "����������@101", "�ں���@102", "������@103", "������@104", "�׸���@105", "��ľ˹��@106", "˫Ѽɽ��@107", "��̨����@108", "������@109", "ĵ������@110", "�绯����@111", "���˰�������@112", "��������@113"],
    "����ʡ@17": ["�人��@236", "ʮ����@237", "�差��@238", "������@239", "Т����@240", "�Ƹ���@241", "������@242", "��ʯ��@243", "������@244", "������@245", "�˲���@246", "������@247", "������@248", "������@249", "Ǳ����@250", "��ũ������@251", "��ʩ����������������@252", "��������@253"],
    "����ʡ@18": ["��ɳ��@254", "�żҽ���@255", "������@256", "������@257", "������@258", "������@259", "��̶��@260", "������@261", "������@262", "������@263", "������@264", "������@265", "¦����@266", "��������������������@267", "��������@268"],
    "�㶫ʡ@19": ["������@269", "��Զ��@270", "�ع���@271", "��Դ��@272", "÷����@273", "������@274", "��ͷ��@275", "������@276", "��β��@277", "������@278", "��ݸ��@279", "������@280", "�麣��@281", "��ɽ��@282", "������@283", "��ɽ��@284", "������@285", "�Ƹ���@286", "������@287", "ï����@288", "տ����@289", "��������@290"],
    "����@20": ["������@291", "������@292", "������@293", "������@294", "������@295", "������@296", "������@297", "������@298", "���Ǹ���@299", "��ɫ��@301", "�ӳ���@302", "������@304", "������@542", "ƾ����@543", "������@544", "��������@305"],
    "����ʡ@21": ["������@306", "������@307", "��ɽ��@308", "�Ĳ���@309", "������@310", "������@311", "������@313", "������@314", "�ٸ���@315", "������@316", "������@317", "�Ͳ���@318", "��������������@319", "��ɳ����������@320", "������������������@321", "��ˮ����������@322", "��ͤ��������������@323", "�ֶ�����������@324", "��ָɽ��@539", "��������@326"],
    "�Ĵ�ʡ@22": ["�ɶ���@359", "��Ԫ��@360", "������@361", "������@362", "�ϳ���@363", "�㰲��@364", "������@365", "�ڽ���@366", "��ɽ��@367", "�Թ���@368", "������@369", "�˱���@370", "��֦����@371", "������@372", "������@373", "������@374", "üɽ��@375", "�Ű���@376", "���Ӳ���Ǽ��������@377", "���β���������@378", "��ɽ����������@379", "��������@380"],
    "������@23": ["������@327", "���ɿ���@328", "������@329", "ɳƺ����@330", "��������@331", "�ϰ���@332", "������@333", "��ʢ��@334", "˫����@335", "�山��@336", "������@337", "������@338", "������@339", "�ϴ���@340", "������@341", "������@342", "�ϴ���@343", "������@344", "�뽭��@345", "������@346", "ͭ����@347", "������@348", "�ٲ���@349", "��ɽ��@350", "�潭��@351", "��¡��@352", "�ᶼ��@353", "�ǿ���@354", "��ƽ��@355", "ǭ����@357", "������@545", "����@546", "������@547", "����@548", "��Ϫ��@549", "��ɽ��@550", "ʯ��������������@551", "��ɽ����������������@552", "��������������������@553", "��ˮ����������������@554", "��������@358"],
    "̨��ʡ@24": ["̨����@479", "������@480", "̨����@481", "̨����@482", "��������@484", "��¡��@579", "������@580", "������@581", "̨����@582", "������@583", "������@584", "��԰��@585", "������@586", "̨����@587", "�û���@588", "��Ͷ��@589", "������@590", "������@591", "̨����@592", "������@593", "������@594", "̨����@595", "������@596", "������@597", "���㵺@602"],
    "����ʡ@25": ["������@381", "����ˮ��@382", "������@383", "�Ͻڵ���@384", "ͭ�ʵ���@385", "��˳��@386", "ǭ�������嶱��������@387", "ǭ�ϲ���������������@388", "ǭ���ϲ���������������@389", "��������@390"],
    "����ʡ@26": ["������@391", "������@392", "��Ϫ��@393", "������@394", "��ͨ��@395", "�ն���@396", "�ٲ���@397", "��ɽ��@398", "�º����徰����������@399", "ŭ��������������@400", "��������������@401", "��������������@402", "��������������@403", "���ӹ���������������@404", "��ɽ׳������������@405", "��˫���ɴ���������@406", "��������@407"],
    "����@27": ["������@408", "��������@409", "��������@410", "��֥����@411", "ɽ�ϵ���@412", "�տ�������@413", "��������@414", "��������@415"],
    "����ʡ@28": ["������@416", "�Ӱ���@417", "ͭ����@418", "μ����@419", "������@420", "������@421", "������@422", "������@423", "������@424", "������@425", "��������@426"],
    "����ʡ@29": ["������@427", "��������@428", "������@429", "������@430", "��ˮ��@431", "��Ȫ��@432", "��Ҵ��@433", "������@434", "������@435", "ƽ����@436", "������@437", "¤�ϵ���@438", "���Ļ���������@439", "���ϲ���������@440", "������@557", "�ػ���@558", "��������@441"],
    "�ຣʡ@30": ["������@442", "��������@443", "��������������@444", "���ϲ���������@445", "���ϲ���������@446", "��������������@447", "��������������@448", "�����ɹ�������������@449", "�ຣʡ��������@450"],
    "����@31": ["������@451", "ʯ��ɽ��@452", "������@453", "��ԭ��@454", "������@599", "��������@455"],
    "�½�@32": ["��³ľ����@456", "����������@457", "ʯ������@458", "��ʲ����@459", "�����յ���@460", "��������@461", "��³������@462", "���ܵ���@463", "�������տ¶�����������@464", "���������ɹ�������@465", "��������������@466", "���������ɹ�������@467", "����������������@468", "��������@469", "���ǵ���@470", "����̩����@471", "ͼľ������@600", "��������@601", "��������@472"],
    "����@33": ["��������@474", "������@559", "����@560", "������@561", "����@562", "��ˮ����@563", "�ƴ�����@564", "������@565", "�ͼ�����@566", "�뵺��@567", "������@568", "����@569", "������@570", "ɳ����@571", "������@572", "������@573", "������@574", "Ԫ����@575", "��������@476"],
    "����@34": ["����������@603", "ʥ����������@604", "������@605", "��������@606", "��˳����@607", "��ģ����@608", "ʥ���ø�����@609"]
};


