package keeper

import (
	"github.com/slandymani/odin-workshop/x/odinworkshop/types"
)

var _ types.QueryServer = Keeper{}
