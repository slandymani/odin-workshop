package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/slandymani/odin-workshop/testutil/keeper"
	"github.com/slandymani/odin-workshop/x/odinworkshop/keeper"
	"github.com/slandymani/odin-workshop/x/odinworkshop/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.OdinworkshopKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
