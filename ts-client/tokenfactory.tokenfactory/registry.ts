import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/tokenfactory/tokenfactory/params";
import { MsgUpdateParamsResponse } from "./types/tokenfactory/tokenfactory/tx";
import { QueryAllDenomRequest } from "./types/tokenfactory/tokenfactory/query";
import { MsgCreateDenom } from "./types/tokenfactory/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/tokenfactory/tokenfactory/tx";
import { QueryParamsRequest } from "./types/tokenfactory/tokenfactory/query";
import { MsgUpdateOwnerResponse } from "./types/tokenfactory/tokenfactory/tx";
import { QueryParamsResponse } from "./types/tokenfactory/tokenfactory/query";
import { QueryGetDenomRequest } from "./types/tokenfactory/tokenfactory/query";
import { GenesisState } from "./types/tokenfactory/tokenfactory/genesis";
import { Denom } from "./types/tokenfactory/tokenfactory/denom";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tokenfactory/tx";
import { MsgCreateDenomResponse } from "./types/tokenfactory/tokenfactory/tx";
import { QueryGetDenomResponse } from "./types/tokenfactory/tokenfactory/query";
import { QueryAllDenomResponse } from "./types/tokenfactory/tokenfactory/query";
import { MsgUpdateParams } from "./types/tokenfactory/tokenfactory/tx";
import { MsgUpdateDenomResponse } from "./types/tokenfactory/tokenfactory/tx";
import { MsgMintAndSendTokensResponse } from "./types/tokenfactory/tokenfactory/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/tokenfactory.tokenfactory.Params", Params],
    ["/tokenfactory.tokenfactory.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/tokenfactory.tokenfactory.QueryAllDenomRequest", QueryAllDenomRequest],
    ["/tokenfactory.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/tokenfactory.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/tokenfactory.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
    ["/tokenfactory.tokenfactory.QueryParamsRequest", QueryParamsRequest],
    ["/tokenfactory.tokenfactory.MsgUpdateOwnerResponse", MsgUpdateOwnerResponse],
    ["/tokenfactory.tokenfactory.QueryParamsResponse", QueryParamsResponse],
    ["/tokenfactory.tokenfactory.QueryGetDenomRequest", QueryGetDenomRequest],
    ["/tokenfactory.tokenfactory.GenesisState", GenesisState],
    ["/tokenfactory.tokenfactory.Denom", Denom],
    ["/tokenfactory.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/tokenfactory.tokenfactory.MsgCreateDenomResponse", MsgCreateDenomResponse],
    ["/tokenfactory.tokenfactory.QueryGetDenomResponse", QueryGetDenomResponse],
    ["/tokenfactory.tokenfactory.QueryAllDenomResponse", QueryAllDenomResponse],
    ["/tokenfactory.tokenfactory.MsgUpdateParams", MsgUpdateParams],
    ["/tokenfactory.tokenfactory.MsgUpdateDenomResponse", MsgUpdateDenomResponse],
    ["/tokenfactory.tokenfactory.MsgMintAndSendTokensResponse", MsgMintAndSendTokensResponse],
    
];

export { msgTypes }